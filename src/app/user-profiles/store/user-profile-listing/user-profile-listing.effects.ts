import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {UserProfileListingStore} from './user-profile-listing.store';
import {createAction} from '../../../store/create-action';
import {UserProfilesService} from '../../services/user-profiles.service';

@Injectable()
export class UserProfileListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(UserProfileListingStore.RETRIEVE)
    .mergeMap(() => this.userProfilesService.getAll()
      .map(userProfiles => createAction(UserProfileListingStore.RETRIEVE_SUCCESS, { userProfiles }))
      .catch(error => Observable.of(createAction(UserProfileListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private userProfilesService: UserProfilesService
  ) {

  }

}
