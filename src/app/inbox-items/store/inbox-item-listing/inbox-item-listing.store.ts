import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getInboxItems,
  getInboxItem,
  IInboxItem,
  IInboxItemFilters,
  IInboxItemListing,
} from '../../interfaces';

@Injectable()
export class InboxItemListingStore {

  public static RETRIEVE = 'VIDEO_GAME_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'VIDEO_GAME_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'VIDEO_GAME_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'VIDEO_GAME_LISTING_SEARCH';
  public static FILTER_PLATFORM = 'VIDEO_GAME_LISTING_FILTER_PLATFORM';
  public static TOGGLE_FAVORITE_FILTER = 'VIDEO_GAME_LISTING_FILTER_FAVORITES';
  public static TOGGLE_FAVORITE = 'VIDEO_GAME_TOGGLE_FAVORITE';

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

  public retrieve() {
    this.store.dispatch(createAction(InboxItemListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(InboxItemListingStore.SEARCH, {query}));
  }

  public filterPlatform(platform: string) {
    this.store.dispatch(createAction(InboxItemListingStore.FILTER_PLATFORM, {platform}));
  }

  public toggleFavoriteFilter() {
    this.store.dispatch(createAction(InboxItemListingStore.TOGGLE_FAVORITE_FILTER));
  }

  public toggleFavorite(id: string) {
    this.store.dispatch(createAction(InboxItemListingStore.TOGGLE_FAVORITE, {id}));
  }

}
