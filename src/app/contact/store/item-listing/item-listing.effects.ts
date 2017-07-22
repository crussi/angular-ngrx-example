import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {ContactListingStore} from './item-listing.store';
import {createAction} from '../../../store/create-action';
import {ContactService} from '../../services/items.service';

@Injectable()
export class ContactListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(ContactListingStore.RETRIEVE)
    .mergeMap(() => this.contactService.getAll()
      .map(contact => createAction(ContactListingStore.RETRIEVE_SUCCESS, { contact }))
      .catch(error => Observable.of(createAction(ContactListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) {

  }

}
