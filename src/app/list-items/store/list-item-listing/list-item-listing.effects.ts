import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {ListItemListingStore} from './list-item-listing.store';
import {createAction} from '../../../store/create-action';
import {ListItemsService} from '../../services/list-items.service';

@Injectable()
export class ListItemListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(ListItemListingStore.RETRIEVE)
    .mergeMap(() => this.listItemsService.getAll()
      .map(listItems => createAction(ListItemListingStore.RETRIEVE_SUCCESS, { listItems }))
      .catch(error => Observable.of(createAction(ListItemListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private listItemsService: ListItemsService
  ) {

  }

}
