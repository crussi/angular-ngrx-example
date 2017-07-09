import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getItems,
  getItem,
  getNextItemId,
  IDelegatedItemListing,
} from '../../interfaces';
import { IItemFilters } from '../../../shared/barrel';

import { ItemProcessed } from '../../models/item.models';
import { IDelegatedItem } from '../../interfaces';

@Injectable()
export class DelegatedItemListingStore {

  public static RETRIEVE = 'DELEGATED_ITEM_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'DELEGATED_ITEM_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'DELEGATED_ITEM_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'DELEGATED_ITEM_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'DELEGATED_ITEM_ITEM_LISTING_FILTER_USER';
  // public static TOGGLE_FAVORITE_FILTER = 'DELEGATED_ITEM_ITEM_LISTING_FILTER_FAVORITES';
  // public static TOGGLE_FAVORITE = 'DELEGATED_ITEM_ITEM_TOGGLE_FAVORITE';
  public static UPDATE_PROCESSED = 'DELEGATED_ITEM_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IDelegatedItemListing> {
    return this.store.select(appState => { 
      return appState.delegatedItemListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(delegatedItemListing => delegatedItemListing.filters);
  }

  public getItems(): Observable<Array<IDelegatedItem>> {
    return this.getItemListing()
      .map(delegatedItemListing => getItems(delegatedItemListing));
  }

  public getItem(id: string): Observable<IDelegatedItem> {
    console.log("delegated store getItem",id);
    return this.getItemListing()
      .map(delegatedItemListing => { 
        console.log("delegated store getItem delegatedItemListing", delegatedItemListing);
        return getItem(delegatedItemListing, id)});
  }

  //New
  // public getNextItemId(id: string): Observable<string> {
  //   return this.getItemListing()
  //     .map(delegatedItemListing => getNextItemId(delegatedItemListing,id));
  // }

  //New
  public setItemProcessed(id: string) {
    //console.log('store setUpdateProcessed id:',event);
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

  // public toggleFavoriteFilter() {
  //   this.store.dispatch(createAction(DelegatedItemListingStore.TOGGLE_FAVORITE_FILTER));
  // }

  // public toggleFavorite(id: string) {
  //   this.store.dispatch(createAction(DelegatedItemListingStore.TOGGLE_FAVORITE, {id}));
  // }

}
