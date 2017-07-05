import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {NextActionListingStore} from './next-action-listing.store';
import {createAction} from '../../../store/create-action';
import {NextActionsService} from '../../services/next-actions.service';

@Injectable()
export class NextActionListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(NextActionListingStore.RETRIEVE)
    .mergeMap(() => this.nextActionsService.getAll()
      .map(nextActions => createAction(NextActionListingStore.RETRIEVE_SUCCESS, { nextActions }))
      .catch(error => Observable.of(createAction(NextActionListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private nextActionsService: NextActionsService
  ) {

  }

}
