import { Component, OnInit, OnDestroy, ErrorHandler} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
//import { IDelegatedItem, DelegatedItemProcessed, DelegatedItemNext, StepEnum} from '../../../../shared/barrel';
import { DelegatedItemProcessed, DelegatedItemNext } from '../../../models/delegated-item.models';
import { IDelegatedItem } from '../../../interfaces';
import {DelegatedItemListingStore} from '../../../store/delegated-item-listing/delegated-item-listing.store';
import { StepsStateStore } from '../../../../wizard-begin/store/steps-state/steps-state.store';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-delegated-item-detail-page',
  templateUrl: './delegated-item-detail-page.component.html',
  styleUrls: ['./delegated-item-detail-page.component.scss']
})
export class DelegatedItemDetailPageComponent implements OnInit, ErrorHandler {

  public delegatedItem$: Observable<IDelegatedItem>;
  public nextId$: Observable<string>;
  message: any;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private delegatedItemListingStore: DelegatedItemListingStore,
    private stepsStateStore: StepsStateStore,
    private messageService: MessageService
  ) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; console.log('message',message) });
  }

  public ngOnInit() {
    this.delegatedItem$ = this.route.params
      .switchMap((params: any) => this.delegatedItemListingStore.getDelegatedItem(params.delegatedItemId));
  }

  public ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  public onDelegatedItemProcessed(event: DelegatedItemProcessed) {
    console.log('*** onDelegatedItemProcessed() ***',event);
    this.delegatedItemListingStore.setDelegatedItemProcessed(event.id);
    //this.abc(event);
  }


  // public onDelegatedItemNext(event: DelegatedItemNext) {
  //   console.log('***--->>>> onDelegatedItemNext() <<<<---***');
  //   // this.delegatedItem$ = this.route.params
  //   //   .switchMap((params: any) => this.delegatedItemListingStore.getNextDelegatedItem());
  //   this.nextId$ = this.delegatedItemListingStore.getNextDelegatedItemId(event.id);
  // }  

  handleError(error) {
    // do something with the exception
    console.log('error occurred in delegated-item-detail-page.component',error);
  }  

}
