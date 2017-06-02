import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {InboxItemListingStore} from './inbox-item-listing.store';
import {createAction} from '../../../store/create-action';
import {InboxItemsService} from '../../services/inbox-items.service';

@Injectable()
export class InboxItemListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(InboxItemListingStore.RETRIEVE)
    .mergeMap(() => this.inboxItemsService.getAll()
      .map(inboxItems => createAction(InboxItemListingStore.RETRIEVE_SUCCESS, { inboxItems }))
      .catch(error => Observable.of(createAction(InboxItemListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private inboxItemsService: InboxItemsService
  ) {

  }

}
