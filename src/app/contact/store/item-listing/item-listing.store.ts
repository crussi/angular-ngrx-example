import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getItems,
  getItem,
  IItemListing,
  SortNameFn
} from '../../../shared/barrel';
import { IItemFilters } from '../../../shared/barrel';

import { ItemProcessed } from '../../../shared/barrel';
import { IItem } from '../../../shared/barrel';

@Injectable()
export class ContactListingStore {

  public static RETRIEVE = 'CONTACT_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'CONTACT_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'CONTACT_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'CONTACT_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'CONTACT_ITEM_LISTING_FILTER_USER';
  public static UPDATE_PROCESSED = 'CONTACT_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IItemListing> {
    return this.store.select(appState => { 
      return appState.contactListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(contactListing => contactListing.filters);
  }

  public getItems(): Observable<Array<IItem>> {
    return this.getItemListing()
      .map(contactListing => getItems(contactListing, SortNameFn));
  }

  public getItem(id: string): Observable<IItem> {
    return this.getItemListing()
      .map(contactListing => { 
        return getItem(contactListing, id)});
  }

  public setItemProcessed(id: string) {
    this.store.dispatch(createAction(ContactListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(ContactListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(ContactListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(ContactListingStore.FILTER_USER, { user }));
  }

}
