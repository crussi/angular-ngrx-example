import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {ISteps} from '../../interfaces/steps-begin/steps-begin.interface';
import {IAppState} from '../../../interfaces/app-state.interface';
import {createAction} from '../../../store/create-action';

@Injectable()
export class StepsBeginStore {

  public static RETRIEVE = 'STEPS_BEGIN_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'STEPS_BEGIN_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'STEPS_BEGIN_RETRIEVE_ERROR';
  public static STATECHANGED = 'STEPS_BEGIN_STATECHANGED';

  constructor(private store: Store<IAppState>) {

  }

  // public getInboxItem(id: string): Observable<IInboxItem> {
  //   return this.getInboxItemListing()
  //     .map(inboxItemListing => getInboxItem(inboxItemListing, id));
  // }
  public getSteps(): Observable<ISteps> {
    return this.store.select(appState => appState.stepsBegin);
  }

  public retrieve() {
    this.store.dispatch(createAction(StepsBeginStore.RETRIEVE));
  }

  public stateChanged() {
    this.store.dispatch(createAction(StepsBeginStore.STATECHANGED));
  }

}
