import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {DelegatedItemListingStore} from './delegated-item-listing.store';
import {createAction} from '../../../store/create-action';
import {DelegatedItemsService} from '../../services/delegated-items.service';

@Injectable()
export class DelegatedItemListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(DelegatedItemListingStore.RETRIEVE)
    .mergeMap(() => this.delegatedItemsService.getAll()
      .map(delegatedItems => createAction(DelegatedItemListingStore.RETRIEVE_SUCCESS, { delegatedItems }))
      .catch(error => Observable.of(createAction(DelegatedItemListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private delegatedItemsService: DelegatedItemsService
  ) {

  }

}
