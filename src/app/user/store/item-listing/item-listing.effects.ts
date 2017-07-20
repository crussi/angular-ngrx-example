import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {UserListingStore} from './item-listing.store';
import {createAction} from '../../../store/create-action';
import {UserService} from '../../services/items.service';

@Injectable()
export class UserListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(UserListingStore.RETRIEVE)
    .mergeMap(() => this.userService.getAll()
      .map(user => createAction(UserListingStore.RETRIEVE_SUCCESS, { user }))
      .catch(error => Observable.of(createAction(UserListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {

  }

}
