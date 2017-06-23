import { Component, OnInit, OnDestroy, ErrorHandler} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
//import {IListItem} from '../../../interfaces/list-item/list-item.interface';
//import { IListItem, ListItemProcessed, ListItemNext, StepEnum} from '../../../../shared/barrel';
import { IListItem, StepEnum } from '../../../../shared/barrel';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';
import { StepsStateStore } from '../../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-list-item-detail-page',
  templateUrl: './list-item-detail-page.component.html',
  styleUrls: ['./list-item-detail-page.component.scss']
})
export class ListItemDetailPageComponent implements OnInit, ErrorHandler {

  public listItem$: Observable<IListItem>;
  public nextId$: Observable<string>;
  message: any;
  //subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private listItemListingStore: ListItemListingStore,
    private stepsStateStore: StepsStateStore,
  ) {
  }

  public ngOnInit() {
    this.listItem$ = this.route.params
      .switchMap((params: any) => this.listItemListingStore.getListItem(params.listItemId));
  }

  public ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    //this.subscription.unsubscribe();
  }

  // public onListItemProcessed(event: ListItemProcessed) {
  //   console.log('*** onListItemProcessed() ***',event);
  //   this.listItemListingStore.setListItemProcessed(event.id);
  //   this.abc(event);
  // }

  // private abc(event: ListItemProcessed) {
  //   let states = event.stepStates;
  //   if (states[StepEnum.IsActionable].State === true) {
  //     console.log('is actionable');
  //     if (states[StepEnum.IsProject].State === true) {
  //       console.log('is project');
  //       console.log('outcome: ' + states[StepEnum.ProjectPlan].State.outcome);
  //       console.log('title: ' + states[StepEnum.ProjectPlan].State.title);
  //     } else {
  //       console.log('is not a project');
  //       let nextaction = states[StepEnum.NextAction].State.nextaction;
  //       if (states[StepEnum.IsDoableNow].State === true) {
  //         console.log('is doable now');
  //         if (states[StepEnum.DoItNow].State === true) {
  //           console.log('task was completed in doitnow nextaction:',nextaction);
  //         }          
  //       } else if (states[StepEnum.IsDelegatable].State === true) {
  //         let delegate = states[StepEnum.Delegate].State.delegate;
  //         console.log('is delegateable nextaction: ' + nextaction + ' delegated to:', delegate);
  //       } else if (states[StepEnum.IsSchedulable].State === true) {
  //         let eventdate = states[StepEnum.Schedule].State.eventdate;
  //         console.log('is schedulable eventdate:', eventdate);
  //       } else {
  //         let refineaction = states[StepEnum.Schedule].State ? states[StepEnum.Schedule].State.refineaction : ''; 
  //         console.log('refine action', refineaction);
  //       }
  //     }

  //   } else {
  //       console.log('is nonactionable');
  //       let nonactionable = states[StepEnum.NonActionable].State ? states[StepEnum.NonActionable].State.nonactionable : '';
  //       switch (nonactionable)
  //       {
  //         case "someday":
  //           console.log('process someday');
  //           break
  //         case "trash":
  //           console.log('process trash');
  //           break;
  //         case "reference":
  //           console.log('process reference');
  //           break;
  //         default: 
  //           console.log('unknown nonactionable');
  //           break;
  //       }
  //   }
  // }

  // public onListItemNext(event: ListItemNext) {
  //   console.log('***--->>>> onListItemNext() <<<<---***');
  //   // this.listItem$ = this.route.params
  //   //   .switchMap((params: any) => this.listItemListingStore.getNextListItem());
  //   this.nextId$ = this.listItemListingStore.getNextListItemId(event.id);
  // }  

  handleError(error) {
    // do something with the exception
    console.log('error occurred in list-item-detail-page.component',error);
  }  

}
