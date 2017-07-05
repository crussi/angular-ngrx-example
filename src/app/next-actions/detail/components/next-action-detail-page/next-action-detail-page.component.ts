import { Component, OnInit, OnDestroy, ErrorHandler} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { INextAction, NextActionProcessed, NextActionNext, StepEnum} from '../../../../shared/barrel';
import {NextActionListingStore} from '../../../store/next-action-listing/next-action-listing.store';
import { StepsStateStore } from '../../../../wizard-begin/store/steps-state/steps-state.store';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-next-action-detail-page',
  templateUrl: './next-action-detail-page.component.html',
  styleUrls: ['./next-action-detail-page.component.scss']
})
export class NextActionDetailPageComponent implements OnInit, ErrorHandler {

  public nextAction$: Observable<INextAction>;
  public nextId$: Observable<string>;
  message: any;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private nextActionListingStore: NextActionListingStore,
    private stepsStateStore: StepsStateStore,
    private messageService: MessageService
  ) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; console.log('message',message) });
  }

  public ngOnInit() {
    this.nextAction$ = this.route.params
      .switchMap((params: any) => this.nextActionListingStore.getNextAction(params.nextActionId));
  }

  public ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  public onNextActionProcessed(event: NextActionProcessed) {
    console.log('*** onNextActionProcessed() ***',event);
    this.nextActionListingStore.setNextActionProcessed(event.id);
    this.abc(event);
  }

  private abc(event: NextActionProcessed) {
    let states = event.stepStates;
    if (states[StepEnum.IsActionable].State === true) {
      console.log('is actionable');
      if (states[StepEnum.IsProject].State === true) {
        console.log('is project');
        console.log('outcome: ' + states[StepEnum.ProjectPlan].State.outcome);
        console.log('title: ' + states[StepEnum.ProjectPlan].State.title);
      } else {
        console.log('is not a project');
        let nextaction = states[StepEnum.NextAction].State.nextaction;
        if (states[StepEnum.IsDoableNow].State === true) {
          console.log('is doable now');
          if (states[StepEnum.DoItNow].State === true) {
            console.log('task was completed in doitnow nextaction:',nextaction);
          }          
        } else if (states[StepEnum.IsDelegatable].State === true) {
          let delegate = states[StepEnum.Delegate].State.delegate;
          console.log('is delegateable nextaction: ' + nextaction + ' delegated to:', delegate);
        } else if (states[StepEnum.IsSchedulable].State === true) {
          let eventdate = states[StepEnum.Schedule].State.eventdate;
          console.log('is schedulable eventdate:', eventdate);
        } else {
          let refineaction = states[StepEnum.Schedule].State ? states[StepEnum.Schedule].State.refineaction : ''; 
          console.log('refine action', refineaction);
        }
      }

    } else {
        console.log('is nonactionable');
        let nonactionable = states[StepEnum.NonActionable].State ? states[StepEnum.NonActionable].State.nonactionable : '';
        switch (nonactionable)
        {
          case "someday":
            console.log('process someday');
            break
          case "trash":
            console.log('process trash');
            break;
          case "reference":
            console.log('process reference');
            break;
          default: 
            console.log('unknown nonactionable');
            break;
        }
    }
  }

  // public onNextActionNext(event: NextActionNext) {
  //   console.log('***--->>>> onNextActionNext() <<<<---***');
  //   // this.nextAction$ = this.route.params
  //   //   .switchMap((params: any) => this.nextActionListingStore.getNextNextAction());
  //   this.nextId$ = this.nextActionListingStore.getNextNextActionId(event.id);
  // }  

  handleError(error) {
    // do something with the exception
    console.log('error occurred in next-action-detail-page.component',error);
  }  

}
