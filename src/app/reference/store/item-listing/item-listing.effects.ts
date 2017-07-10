import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {ReferenceListingStore} from './item-listing.store';
import {createAction} from '../../../store/create-action';
import {ReferenceService} from '../../services/items.service';

@Injectable()
export class ReferenceListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(ReferenceListingStore.RETRIEVE)
    .mergeMap(() => this.referenceService.getAll()
      .map(reference => createAction(ReferenceListingStore.RETRIEVE_SUCCESS, { reference }))
      .catch(error => Observable.of(createAction(ReferenceListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private referenceService: ReferenceService
  ) {

  }

}
