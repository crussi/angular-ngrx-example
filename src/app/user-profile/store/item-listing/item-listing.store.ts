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
export class UserProfileListingStore {

  public static RETRIEVE = 'USERPROFILE_ITEM_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'USERPROFILE_ITEM_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'USERPROFILE_ITEM_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'USERPROFILE_ITEM_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'USERPROFILE_ITEM_ITEM_LISTING_FILTER_USER';
  public static UPDATE_PROCESSED = 'USERPROFILE_ITEM_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IUserProfileListing> {
    return this.store.select(appState => { 
      return appState.userProfileListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(userProfileListing => userProfileListing.filters);
  }

  public getItems(): Observable<Array<IItem>> {
    return this.getItemListing()
      .map(userProfileListing => getItems(userProfileListing));
  }

  public getItem(id: string): Observable<IItem> {
    return this.getItemListing()
      .map(userProfileListing => { 
        return getItem(userProfileListing, id)});
  }

  public setItemProcessed(id: string) {
    this.store.dispatch(createAction(UserProfileListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(UserProfileListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(UserProfileListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(UserProfileListingStore.FILTER_USER, {user}));
  }

}
