import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { IUsers } from '../../users/interfaces/users.interface';
import {IAppState} from '../../interfaces/app-state.interface';
import { createAction } from '../../store/create-action';

@Injectable()
export class UsersStore {

  public static RETRIEVE = 'USERS_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'USERS_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'USERS_RETRIEVE_ERROR';

  constructor(private store: Store<IAppState>) {

  }

  public getUsers(): Observable<IUsers> {
    return this.store.select(appState => appState.users);
  }

  public retrieve() {
    this.store.dispatch(createAction(UsersStore.RETRIEVE));
  }

}
