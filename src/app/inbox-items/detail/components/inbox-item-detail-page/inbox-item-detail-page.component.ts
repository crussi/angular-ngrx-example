import {Component, OnInit, ViewChild, ComponentFactoryResolver, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import {IInboxItem} from '../../../interfaces/inbox-item/inbox-item.interface';
import {ISteps} from '../../../../wizard-begin/interfaces';
import {InboxItemListingStore} from '../../../store/inbox-item-listing/inbox-item-listing.store';
import {StepsBeginStore} from '../../../../wizard-begin/store/steps-begin/steps-begin.store';
import {Step, StepState} from '../../../../shared/barrel';
@Component({
  selector: 'app-inbox-item-detail-page',
  templateUrl: './inbox-item-detail-page.component.html',
  styleUrls: ['./inbox-item-detail-page.component.scss']
})
export class InboxItemDetailPageComponent implements OnInit {

  public inboxItem$: Observable<IInboxItem>;
  //public steps$: Observable<StepSettings>;
  public steps$: Observable<ISteps>;
  public steps: Array<Step>;
  public stepStates$: Observable<StepState>;
  constructor(
    private route: ActivatedRoute,
    private inboxItemListingStore: InboxItemListingStore,
    private stepsBeginStore: StepsBeginStore,
    private _componentFactoryResolver: ComponentFactoryResolver,

  ) {

  }

  public ngOnInit() {
    this.inboxItem$ = this.route.params
      .switchMap((params: any) => this.inboxItemListingStore.getInboxItem(params.inboxItemId));
    this.steps$ = this.stepsBeginStore.getSteps();
    this.stepsBeginStore.getSteps().subscribe(s => {
      this.steps = s.list;
      console.log('inbox-item-detail-page steps',this.steps);
    });
    //console.log('inbox-item-detail-page steps$',this.steps$);
    //this.stepStates$ = this.stepsBeginStore.
  }

  //New
  displayDesc = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inboxItem) {
      console.log('wizard.component ngOnChanges',changes.inboxItem);
      //console.log('called from ngOnChanges');
      this.initialize();
    }
  }    
  get Description() {
    //return this.inboxItem ? this.inboxItem.Description : '';
    return "hello world";
  } 

  initialize(){
    // if (!this.steps) {
    //   this.steps = this.stepService.getSteps();
    // }
    console.log('initialize step states');
    // let stepStates: Array<StepState> = this.stepService.getStepStates();
    // this.store.dispatch(new action.LoadAction(stepStates));
    // console.log('load IsActionable');
    // this.loadComponent(new StepTransition(StepEnum.Start,StepEnum.IsActionable));
  }  

  // // private loadComponent(stepTransition:StepTransition) {
  // //   //console.log('loadComponent ' + stepTransition.to + ' ads.length: ' + this.ads.length);
  // //   console.log('stepTransition.to: ',stepTransition);
    
  // //   //Find step component to load and load it
  // //   if (!this.steps || !this.steps.length) {
  // //     console.log('steps empty');
  // //     return;
  // //   }
  // //   for (let i = 0; i < this.steps.length; i++) {
  // //       if (this.steps[i].Name == stepTransition.to) {
  // //         console.log('found match:')
  // //         let step: Step = this.steps[i];
  // //         switch (step.Name) {
  // //           case StepEnum.ApproveChange:
  // //             step.StepOptions.CancelStep = stepTransition.from;
  // //             //console.log('wiz approve changes ...', adItem.Steps.CancelStep);
  // //             //adItem.Settings.Declaration = stepTransition.approveMsg;
  // //             break;
  // //         }

  // //         let componentFactory = this._componentFactoryResolver.resolveComponentFactory(step.Component);
  // //         let viewContainerRef = this.adHost.viewContainerRef;
  // //         viewContainerRef.clear();

  // //         let componentRef = viewContainerRef.createComponent(componentFactory);
  // //         (<BaseComponent>componentRef.instance).Settings = step.Settings;
  // //         //(<BaseComponent>componentRef.instance).State = this.State.getState(stepTransition.to);            
  // //         (<BaseComponent>componentRef.instance).stateChanged.subscribe(event => this.stateChanged(event));
  // //         break;          
  // //       }
  // //   }
  // }    

}
