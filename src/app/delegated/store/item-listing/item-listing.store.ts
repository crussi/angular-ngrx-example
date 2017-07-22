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
} from '../../../shared/barrel';
import { IItemFilters } from '../../../shared/barrel';

import { ItemProcessed } from '../../../shared/barrel';
import { IItem } from '../../../shared/barrel';

@Injectable()
export class DelegatedItemListingStore {

  public static RETRIEVE = 'DELEGATED_ITEM_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'DELEGATED_ITEM_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'DELEGATED_ITEM_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'DELEGATED_ITEM_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'DELEGATED_ITEM_ITEM_LISTING_FILTER_USER';
  public static UPDATE_PROCESSED = 'DELEGATED_ITEM_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IItemListing> {
    return this.store.select(appState => { 
      return appState.delegatedItemListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(delegatedItemListing => delegatedItemListing.filters);
  }

  public getItems(): Observable<Array<IItem>> {
    return this.getItemListing()
      .map(delegatedItemListing => getItems(delegatedItemListing,null));
  }

  public getItem(id: string): Observable<IItem> {
    return this.getItemListing()
      .map(delegatedItemListing => { 
        return getItem(delegatedItemListing, id)});
  }

  public setItemProcessed(id: string) {
    this.store.dispatch(createAction(DelegatedItemListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(DelegatedItemListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(DelegatedItemListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(DelegatedItemListingStore.FILTER_USER, {user}));
  }

}
