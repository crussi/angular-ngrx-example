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
import { getUserNames } from './item-listing.functions';
import { IItemFilters } from '../../../shared/barrel';

import { ItemProcessed } from '../../../shared/barrel';
import { IItem } from '../../../shared/barrel';

@Injectable()
export class UserListingStore {

  public static RETRIEVE = 'USER_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'USER_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'USER_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'USER_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'USER_ITEM_LISTING_FILTER_USER';
  public static UPDATE_PROCESSED = 'USER_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IItemListing> {
    return this.store.select(appState => { 
      return appState.userListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(userListing => userListing.filters);
  }

  public getItems(): Observable<Array<IItem>> {
    return this.getItemListing()
      .map(userListing => getItems(userListing, SortNameFn));
  }

  public getUserNames(): Observable<Array<string>> {
    return this.getItemListing()
      .map(userListing => getUserNames(userListing));
  }

  public getItem(id: string): Observable<IItem> {
    return this.getItemListing()
      .map(userListing => { 
        return getItem(userListing, id)});
  }

  public setItemProcessed(id: string) {
    this.store.dispatch(createAction(UserListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(UserListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(UserListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(UserListingStore.FILTER_USER, {user}));
  }

}
