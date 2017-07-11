import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {NextListingStore} from './item-listing.store';
import {createAction} from '../../../store/create-action';
import {NextService} from '../../services/items.service';

@Injectable()
export class NextListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(NextListingStore.RETRIEVE)
    .mergeMap(() => this.nextService.getAll()
      .map(next => createAction(NextListingStore.RETRIEVE_SUCCESS, { next }))
      .catch(error => Observable.of(createAction(NextListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private nextService: NextService
  ) {

  }

}
