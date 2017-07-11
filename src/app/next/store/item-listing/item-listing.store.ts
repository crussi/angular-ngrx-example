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
  IItemListing,
} from '../../../shared/barrel';
import { IItemFilters } from '../../../shared/barrel';

import { ItemProcessed } from '../../../shared/barrel';
import { IItem } from '../../../shared/barrel';

@Injectable()
export class NextListingStore {

  public static RETRIEVE = 'NEXT_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'NEXT_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'NEXT_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'NEXT_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'NEXT_ITEM_LISTING_FILTER_USER';
  public static UPDATE_PROCESSED = 'NEXT_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IItemListing> {
    return this.store.select(appState => { 
      return appState.nextListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(nextListing => nextListing.filters);
  }

  public getItems(): Observable<Array<IItem>> {
    return this.getItemListing()
      .map(nextListing => getItems(nextListing));
  }

  public getItem(id: string): Observable<IItem> {
    console.log("next store getItem",id);
    return this.getItemListing()
      .map(nextListing => { 
        console.log("next store getItem nextListing", nextListing);
        return getItem(nextListing, id)});
  }

  //New
  public setItemProcessed(id: string) {
    //console.log('store setUpdateProcessed id:',event);
    this.store.dispatch(createAction(NextListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(NextListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(NextListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(NextListingStore.FILTER_USER, {user}));
  }

}
