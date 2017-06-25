import { Component, OnInit, OnDestroy, ErrorHandler} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { IUserProfile, StepEnum} from '../../../../shared/barrel';
import {UserProfileListingStore} from '../../../store/user-profile-listing/user-profile-listing.store';
import { StepsStateStore } from '../../../../wizard-begin/store/steps-state/steps-state.store';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-user-profile-detail-page',
  templateUrl: './user-profile-detail-page.component.html',
  styleUrls: ['./user-profile-detail-page.component.scss']
})
export class UserProfileDetailPageComponent implements OnInit, ErrorHandler {

  public userProfile$: Observable<IUserProfile>;
  public nextId$: Observable<string>;
  message: any;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userProfileListingStore: UserProfileListingStore,
    private stepsStateStore: StepsStateStore,
    private messageService: MessageService
  ) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; console.log('message',message) });
  }

  public ngOnInit() {
    this.userProfile$ = this.route.params
      .switchMap((params: any) => this.userProfileListingStore.getUserProfile(params.userProfileId));
  }

  public ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  handleError(error) {
    // do something with the exception
    console.log('error occurred in user-profile-detail-page.component',error);
  }  

}
