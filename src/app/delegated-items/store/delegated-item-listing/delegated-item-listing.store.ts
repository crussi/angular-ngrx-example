import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getDelegatedItems,
  getDelegatedItem,
  getNextDelegatedItemId,
    IDelegatedItemFilters,
  IDelegatedItemListing,
} from '../../interfaces';
import { DelegatedItemProcessed } from '../../models/delegated-item.models';
import { IDelegatedItem } from '../../interfaces';

@Injectable()
export class DelegatedItemListingStore {

  public static RETRIEVE = 'DELEGATED_ITEM_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'DELEGATED_ITEM_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'DELEGATED_ITEM_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'DELEGATED_ITEM_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'DELEGATED_ITEM_ITEM_LISTING_FILTER_USER';
  public static TOGGLE_FAVORITE_FILTER = 'DELEGATED_ITEM_ITEM_LISTING_FILTER_FAVORITES';
  public static TOGGLE_FAVORITE = 'DELEGATED_ITEM_ITEM_TOGGLE_FAVORITE';
  public static UPDATE_PROCESSED = 'DELEGATED_ITEM_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getDelegatedItemListing(): Observable<IDelegatedItemListing> {
    return this.store.select(appState => appState.delegatedItemListing);
  }

  public getDelegatedItemFilters(): Observable<IDelegatedItemFilters> {
    return this.getDelegatedItemListing()
      .map(delegatedItemListing => delegatedItemListing.filters);
  }

  public getDelegatedItems(): Observable<Array<IDelegatedItem>> {
    return this.getDelegatedItemListing()
      .map(delegatedItemListing => getDelegatedItems(delegatedItemListing));
  }

  public getDelegatedItem(id: string): Observable<IDelegatedItem> {
    return this.getDelegatedItemListing()
      .map(delegatedItemListing => getDelegatedItem(delegatedItemListing, id));
  }

  //New
  public getNextDelegatedItemId(id: string): Observable<string> {
    return this.getDelegatedItemListing()
      .map(delegatedItemListing => getNextDelegatedItemId(delegatedItemListing,id));
  }

  //New
  public setDelegatedItemProcessed(id: string) {
    console.log('store setUpdateProcessed id:',event);
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

  public toggleFavoriteFilter() {
    this.store.dispatch(createAction(DelegatedItemListingStore.TOGGLE_FAVORITE_FILTER));
  }

  public toggleFavorite(id: string) {
    this.store.dispatch(createAction(DelegatedItemListingStore.TOGGLE_FAVORITE, {id}));
  }

}
