import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {UsersStore} from './users.store';
import {createAction} from '../../../store/create-action';
import {UsersService} from '../../services/users.service';

@Injectable()
export class UsersEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(UsersStore.RETRIEVE)
    .mergeMap(() => this.usersService.getAll()
      .map(users => createAction(UsersStore.RETRIEVE_SUCCESS, { users }))
      .catch(error => Observable.of(createAction(UsersStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {

  }

}
