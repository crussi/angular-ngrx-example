import { Component, Input, AfterViewInit, AfterContentInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnInit, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { WizardDirective } from '../../directives/wizard.directive';
import { StepEnum } from '../../../shared/barrel';
import { Step, StepTransition, WizState, StepState, WizStateChange, InboxItemProcessed, InboxItem } from '../../../shared/barrel';
import { BaseComponent } from '../base/base.component';
import { StepsBeginService } from '../../services/steps-begin.service';
import { Store } from '@ngrx/store';
import {ISteps} from '../../interfaces';
// import * as fromRoot from '../../../state-management/reducers';
// import * as action from '../../../state-management/actions/wizard';
// import * as inboxitem from '../../../state-management/actions/inboxitem';
import {StepsBeginStore} from '../../store/steps-begin/steps-begin.store';


@Component({
  selector: 'wizard-beginner',
  template: `
              <div class="ad-banner">
                <h3 *ngIf="displayDesc">{{Description}}</h3>
                <ng-template wizard-host></ng-template>                
              </div>
            `
})
export class WizardBeginner implements AfterViewInit, OnDestroy, OnInit, OnChanges {
  //@Input() steps: Step[];
  //steps: Step[];
  //public steps$: Observable<ISteps>;
  public steps: Array<Step>;
  public stepStates$: Observable<StepState>;

  @Input() inboxItem: InboxItem;
  @Output() onInboxItemProcessed: EventEmitter<InboxItemProcessed> = new EventEmitter();
  //@Output() onHideDescription: EventEmitter<boolean> = new EventEmitter();
  currentAddIndex: number = -1;
  //State: WizState;
  @ViewChild(WizardDirective) adHost: WizardDirective;
  subscription: any;
  interval: any;
  displayDesc = true;

  get Description() {
    return this.inboxItem ? this.inboxItem.Description : '';
  }  

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private stepService: StepsBeginService,
    private store: StepsBeginStore) { }

  ngOnInit(){
    //this.steps$ = this.store.getSteps();
    this.store.getSteps().subscribe(s => {
      this.steps = s.list;
      console.log('wizard-beginner steps',this.steps);
    });

  }
  ngAfterViewInit() {
  }
  ngAfterContentInit() {
    //console.log('called from ngAfterContentInit');
    //this.initialize();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inboxItem) {
      console.log('wizard.component ngOnChanges',changes.inboxItem);
      //console.log('called from ngOnChanges');
      this.initialize();
    }
  }  

  initialize(){
    // if (!this.steps) {
    //   this.steps = this.stepService.getSteps();
    // }
    console.log('initialize step states');
    let stepStates: Array<StepState> = this.stepService.getStepStates();
    //this.store.dispatch(new action.LoadAction(stepStates));
    console.log('load IsActionable');
    this.loadComponent(new StepTransition(StepEnum.Start,StepEnum.IsActionable));
  }

  stateChanged(stateChange:WizStateChange) {
    console.log('wiz stateChanged: ' + StepEnum[stateChange.Step], stateChange.Value);

    //this.State.update(stateChange);
    //console.dir(this.State);
    this.displayDesc = true;

    switch (stateChange.Transition.to) {
      case StepEnum.Navigate:
        //console.log('wizard navigate from here');
        break;
      case StepEnum.Done:
        console.log('Done hide description');
        //this.onHideDescription.emit(true);
        this.displayDesc = false;
        break;
      case StepEnum.Next:
        console.log('wizard is done, process next inbox item');
        this.onInboxItemProcessed.emit(new InboxItemProcessed());
        break;
      case StepEnum.Exit:
        console.log('exit wizard');        
        break;
    }

    //console.log('calling loadComponent from stateChanged');
    this.loadComponent(stateChange.Transition);
  }

  private loadComponent(stepTransition:StepTransition) {
    //console.log('loadComponent ' + stepTransition.to + ' ads.length: ' + this.ads.length);
    console.log('stepTransition.to: ',stepTransition);
    
    //Find step component to load and load it
    if (!this.steps || !this.steps.length) {
      console.log('steps empty');
      return;
    }
    for (let i = 0; i < this.steps.length; i++) {
        if (this.steps[i].Name == stepTransition.to) {
          console.log('found match:')
          let step: Step = this.steps[i];
          switch (step.Name) {
            case StepEnum.ApproveChange:
              step.StepOptions.CancelStep = stepTransition.from;
              //console.log('wiz approve changes ...', adItem.Steps.CancelStep);
              //adItem.Settings.Declaration = stepTransition.approveMsg;
              break;
          }

          let componentFactory = this._componentFactoryResolver.resolveComponentFactory(step.Component);
          let viewContainerRef = this.adHost.viewContainerRef;
          viewContainerRef.clear();

          let componentRef = viewContainerRef.createComponent(componentFactory);
          (<BaseComponent>componentRef.instance).Settings = step.Settings;
          //(<BaseComponent>componentRef.instance).State = this.State.getState(stepTransition.to);            
          (<BaseComponent>componentRef.instance).stateChanged.subscribe(event => this.stateChanged(event));
          break;          
        }
    }
  }

}
