import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getListItems,
  getListItem,
  getNextListItemId,
  IListItemFilters,
  IListItemListing,
} from '../../interfaces';
import { IListItem } from '../../../shared/barrel';

@Injectable()
export class ListItemListingStore {

  public static RETRIEVE = 'LIST_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'LIST_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'LIST_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'LIST_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'LIST_ITEM_LISTING_FILTER_USER';
  public static TOGGLE_FAVORITE_FILTER = 'LIST_ITEM_LISTING_FILTER_FAVORITES';
  public static TOGGLE_FAVORITE = 'LIST_ITEM_TOGGLE_FAVORITE';
  public static UPDATE_PROCESSED = 'LIST_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getListItemListing(): Observable<IListItemListing> {
    return this.store.select((appState) => {
      //console.log('getListItemListing appState', appState);
      return appState.listItemListing
    });
  }

  public getListItemFilters(): Observable<IListItemFilters> {
    return this.getListItemListing()
      .map(listItemListing => listItemListing.filters);
  }

  public getListItems(): Observable<Array<IListItem>> {
    //console.log('list-item-listing.store getListItems');
    return this.getListItemListing()
      .map(listItemListing => getListItems(listItemListing));
  }

  public getListItem(id: string): Observable<IListItem> {
    return this.getListItemListing()
      .map(listItemListing => getListItem(listItemListing, id));
  }

  //New
  public getNextListItemId(id: string): Observable<string> {
    return this.getListItemListing()
      .map(listItemListing => getNextListItemId(listItemListing,id));
  }

  //New
  public setListItemProcessed(id: string) {
    //console.log('store setUpdateProcessed id:',event);
    this.store.dispatch(createAction(ListItemListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    //console.log('list-item-listing.store retrieve');
    this.store.dispatch(createAction(ListItemListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(ListItemListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(ListItemListingStore.FILTER_USER, {user}));
  }

  public toggleFavoriteFilter() {
    this.store.dispatch(createAction(ListItemListingStore.TOGGLE_FAVORITE_FILTER));
  }

  public toggleFavorite(id: string) {
    this.store.dispatch(createAction(ListItemListingStore.TOGGLE_FAVORITE, {id}));
  }

}
