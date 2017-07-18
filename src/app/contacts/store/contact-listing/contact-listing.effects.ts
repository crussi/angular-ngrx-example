import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {ContactListingStore} from './contact-listing.store';
import {createAction} from '../../../store/create-action';
import {ContactsService} from '../../services/contacts.service';

@Injectable()
export class ContactListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(ContactListingStore.RETRIEVE)
    .mergeMap(() => this.contactsService.getAll()
      .map(contacts => createAction(ContactListingStore.RETRIEVE_SUCCESS, { contacts }))
      .catch(error => Observable.of(createAction(ContactListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) {
    console.log('ContactListingEffects');
  }

}
