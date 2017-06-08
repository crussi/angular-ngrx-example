import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getInboxItems,
  getInboxItem,
  getNextInboxItem,
  setUpdateProcessed,
  IInboxItem,
  IInboxItemFilters,
  IInboxItemListing,
} from '../../interfaces';

@Injectable()
export class InboxItemListingStore {

  public static RETRIEVE = 'INBOX_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'INBOX_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'INBOX_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'INBOX_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'INBOX_ITEM_LISTING_FILTER_USER';
  public static TOGGLE_FAVORITE_FILTER = 'INBOX_ITEM_LISTING_FILTER_FAVORITES';
  public static TOGGLE_FAVORITE = 'INBOX_ITEM_TOGGLE_FAVORITE';
  public static UPDATE_PROCESSED = 'INBOX_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getInboxItemListing(): Observable<IInboxItemListing> {
    return this.store.select(appState => appState.inboxItemListing);
  }

  public getInboxItemFilters(): Observable<IInboxItemFilters> {
    return this.getInboxItemListing()
      .map(inboxItemListing => inboxItemListing.filters);
  }

  public getInboxItems(): Observable<Array<IInboxItem>> {
    return this.getInboxItemListing()
      .map(inboxItemListing => getInboxItems(inboxItemListing));
  }

  public getInboxItem(id: string): Observable<IInboxItem> {
    return this.getInboxItemListing()
      .map(inboxItemListing => getInboxItem(inboxItemListing, id));
  }

  //New
  public getNextInboxItem(): Observable<IInboxItem> {
    return this.getInboxItemListing()
      .map(inboxItemListing => getNextInboxItem(inboxItemListing));
  }

  //New
  public setUpdateProcessed(id:string) {
    console.log('store setUpdateProcessed id:',id);
    this.store.dispatch(createAction(InboxItemListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(InboxItemListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(InboxItemListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(InboxItemListingStore.FILTER_USER, {user}));
  }

  public toggleFavoriteFilter() {
    this.store.dispatch(createAction(InboxItemListingStore.TOGGLE_FAVORITE_FILTER));
  }

  public toggleFavorite(id: string) {
    this.store.dispatch(createAction(InboxItemListingStore.TOGGLE_FAVORITE, {id}));
  }

}
