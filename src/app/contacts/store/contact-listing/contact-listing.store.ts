import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getContacts,
  getUsers,
  getContact,
  IContactFilters,
  IContactListing,
} from '../../interfaces';
import { IContact } from '../../../contacts/interfaces';

@Injectable()
export class ContactListingStore {

  public static RETRIEVE = 'CONTACT_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'CONTACT_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'CONTACT_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'CONTACT_LISTING_SEARCH';
  public static FILTER_USER = 'CONTACT_LISTING_FILTER_USER';
  public static TOGGLE_FAVORITE_FILTER = 'CONTACT_LISTING_FILTER_FAVORITES';
  public static TOGGLE_FAVORITE = 'CONTACT_TOGGLE_FAVORITE';
  public static UPDATE_PROCESSED = 'CONTACT_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getContactListing(): Observable<IContactListing> {
    console.log('inside store getContactListing');
    return this.store.select(appState => { 
      console.log('store getContactListing appState',appState);
      return appState.contactListing
    });
  }

  public getContactFilters(): Observable<IContactFilters> {
    return this.getContactListing()
      .map(contactListing => contactListing.filters);
  }

  public getContacts(): Observable<Array<IContact>> {
    return this.getContactListing()
      .map(contactListing => getContacts(contactListing));
  }

  public getUsers(): Observable<Array<string>> {
    return this.getContactListing()
      .map(contactListing => getUsers(contactListing));
  }
  

  public getContact(id: string): Observable<IContact> {
    return this.getContactListing()
      .map(contactListing => getContact(contactListing, id));
  }

  public retrieve() {
    this.store.dispatch(createAction(ContactListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(ContactListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(ContactListingStore.FILTER_USER, {user}));
  }

  public toggleFavoriteFilter() {
    this.store.dispatch(createAction(ContactListingStore.TOGGLE_FAVORITE_FILTER));
  }

  public toggleFavorite(id: string) {
    this.store.dispatch(createAction(ContactListingStore.TOGGLE_FAVORITE, {id}));
  }

}
