import { Component, OnInit, OnDestroy, ErrorHandler} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { StepEnum } from '../../../../shared/barrel';
import { IUserProfile } from '../../../../user-profiles/interfaces';
import { UserProfileListingStore } from '../../../store/user-profile-listing/user-profile-listing.store';
import { StepsStateStore } from '../../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-user-profile-detail-page',
  templateUrl: './user-profile-detail-page.component.html',
  styleUrls: ['./user-profile-detail-page.component.scss']
})
export class UserProfileDetailPageComponent implements OnInit, ErrorHandler {

  public userProfile$: Observable<IUserProfile>;
  //public nextId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private userProfileListingStore: UserProfileListingStore,
    private stepsStateStore: StepsStateStore,
  ) {
  }

  public ngOnInit() {
    this.userProfile$ = this.route.params
      .switchMap((params: any) => this.userProfileListingStore.getUserProfile(params.userProfileId));
  }

  public ngOnDestroy() {

  }

  handleError(error) {
    // do something with the exception
    console.log('error occurred in user-profile-detail-page.component',error);
  }  

}
