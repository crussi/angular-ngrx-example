import { Component, Input, AfterViewInit, AfterContentInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnInit, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { WizardDirective } from '../../directives/wizard.directive';
import { StepEnum } from '../../../shared/barrel';
import { Step, StepTransition, WizState, StepState, WizStateChange, InboxItemProcessed, InboxItemNext, IInboxItem } from '../../../shared/barrel';
import { BaseComponent } from '../base/base.component';
import { StepsBeginService } from '../../services/steps-begin.service';
import { Store } from '@ngrx/store';
import { ISteps } from '../../interfaces';
import { StepsBeginStore } from '../../store/steps-begin/steps-begin.store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';


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

  @Input() inboxItem: IInboxItem;
  @Output() onInboxItemProcessed: EventEmitter<InboxItemProcessed> = new EventEmitter();
  @Output() onInboxItemNext: EventEmitter<InboxItemNext> = new EventEmitter();
  //@Output() onHideDescription: EventEmitter<boolean> = new EventEmitter();
  currentAddIndex: number = -1;
  //State: WizState;
  @ViewChild(WizardDirective) adHost: WizardDirective;
  subscription: any;
  interval: any;
  displayDesc = true;

  get Description() {
    return this.inboxItem ? this.inboxItem.description : '';
  }  

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private stepService: StepsBeginService,
    private stepsBeginStore: StepsBeginStore,
    private stepStateStore: StepsStateStore,
    private router: Router) { 

    //console.log('constructor start');
    this.stepsBeginStore.getSteps().subscribe(s => {
      this.steps = s.list;
      //console.log('ngOnInit wizard-beginner steps',this.steps);
    });
      
    }

  ngOnInit(){
    //this.steps$ = this.store.getSteps();
    //console.log('ngOnInit start');

  }
  ngAfterViewInit() {
  }
  ngAfterContentInit() {
    //console.log('called from ngAfterContentInit');
    //this.initialize();
    //console.log('ngAfterContentInit start');
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log('ngOnChanges start');
    console.log('changes', changes);
    //console.log('changes.inboxItem', changes.inboxItem);
    //let obj = changes.inboxItem;
    //console.log('obj.currentValue', obj.currentValue);
    //console.log('changes.inboxItem.currentValue', changes.inboxItem.currentValue);
    if (changes.inboxItem) {
      let hasCurVal = changes.inboxItem.currentValue;
      let hasPrevVal = changes.inboxItem.previousValue;
      console.log('(hasCurVal && hasPrevVal && (hasCurVal.id != hasPrevVal.id))', (hasCurVal && hasPrevVal && (hasCurVal.id != hasPrevVal.id)));
      if (!hasPrevVal || (hasCurVal && hasPrevVal && (hasCurVal.id != hasPrevVal.id))) {
        //New inbox item, refresh step state
        console.log('+++ called stepStateStore.retrieve()');
        this.stepStateStore.retrieve();
      } else {
        console.log('hasPrevVal=true');
      }
      if (hasCurVal && !hasCurVal.processed) {
        //console.log('wizard.component ngOnChanges', changes.inboxItem);
        //console.log('called from ngOnChanges');
        this.initialize();
      } else if (hasCurVal && hasCurVal.processed)  {
        //console.log('wizard.component ngOnChanges processed',changes);
      } else {
        //console.log('wizard.component ngOnChanges no currentValue',changes);
      }

    } else {
      //console.log("wizard.component ngOnChanges no changes.inboxItem",changes);
    }
  }  

  initialize(){
    // if (!this.steps) {
    //   this.steps = this.stepService.getSteps();
    // }
    //console.log('initialize step states');
    //let stepStates: Array<StepState> = this.stepService.getStepStates();
    //this.store.dispatch(new action.LoadAction(stepStates));
    //console.log('load IsActionable');
    this.loadComponent(new StepTransition(StepEnum.Start,StepEnum.IsActionable));
  }

  stateChanged(stateChange:WizStateChange) {
    //console.log('wiz stateChanged: ' + StepEnum[stateChange.Step], stateChange.Value);

    //this.State.update(stateChange);
    //console.dir(this.State);
    this.displayDesc = true;

    switch (stateChange.Transition.to) {
      case StepEnum.Navigate:
        //console.log('wizard navigate from here');
        break;
      case StepEnum.Done:
        //console.log('Done hide description');
        //this.onHideDescription.emit(true);
        this.displayDesc = false;
        console.log("emit InboxItemProcessed", this.inboxItem.id);
        let s = this.stepStateStore.getStepsState().subscribe(state => {
          this.onInboxItemProcessed.emit(new InboxItemProcessed(this.inboxItem.id, state.list));
        });
        break;
      case StepEnum.Next:
        console.log('*** Error: StepEnum.Next being phased out ***');
        //this.onInboxItemNext.emit(new InboxItemNext(this.inboxItem.id));
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
    //console.log('stepTransition.to: ',stepTransition);
    this.displayDesc = true;

    //Find step component to load and load it
    if (!this.steps || !this.steps.length) {
      //console.log('steps empty');
      return;
    }
  
    for (let i = 0; i < this.steps.length; i++) {
        //console.log('this.steps[i].Name',this.steps[i].Name);
        if (this.steps[i].Name == stepTransition.to) {
          //console.log('found match:',this.steps[i].Name);
          let step: Step = this.steps[i];
          //Capture prev and next inbox item id's
          step.Settings.prevInboxItemId = this.inboxItem.prevId;
          step.Settings.nextInboxItemId = this.inboxItem.nextId;
          
          switch (step.Name) {
            case StepEnum.ApproveChange:
              step.StepOptions.CancelStep = stepTransition.from;
              //console.log('wiz approve changes ...', adItem.Steps.CancelStep);
              //adItem.Settings.Declaration = stepTransition.approveMsg;
              break;
            case StepEnum.Done:
              //No sense in loading ProcessNext if no more inbox items to process
              if (step.Settings.prevInboxItemId == "0" && step.Settings.nextInboxItemId == "0") {
                this.router.navigate(['/inboxItems/listing']);
              }
              break;
          }

          let componentFactory = this._componentFactoryResolver.resolveComponentFactory(step.Component);
          let viewContainerRef = this.adHost.viewContainerRef;
          viewContainerRef.clear();

          let componentRef = viewContainerRef.createComponent(componentFactory);
          //console.log('about to assign Settings',step.Settings);
          (<BaseComponent>componentRef.instance).Settings = step.Settings;
          //(<BaseComponent>componentRef.instance).State = this.State.getState(stepTransition.to);            
          (<BaseComponent>componentRef.instance).stateChanged.subscribe(event => this.stateChanged(event));
          break;          
        }
    }
  }

}
