import { Component, OnInit, OnDestroy, ErrorHandler} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
//import { INextAction, NextActionProcessed, NextActionNext, StepEnum} from '../../../../shared/barrel';
import { NextActionProcessed, NextActionNext } from '../../../models/next-action.models';
import { INextAction } from '../../../interfaces';
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
    //this.abc(event);
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
