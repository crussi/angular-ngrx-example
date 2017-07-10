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
export class TrashListingStore {

  public static RETRIEVE = 'TRASH_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'TRASH_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'TRASH_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'TRASH_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'TRASH_ITEM_LISTING_FILTER_USER';
  public static UPDATE_PROCESSED = 'TRASH_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IItemListing> {
    return this.store.select(appState => { 
      return appState.trashListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(trashListing => trashListing.filters);
  }

  public getItems(): Observable<Array<IItem>> {
    return this.getItemListing()
      .map(trashListing => getItems(trashListing));
  }

  public getItem(id: string): Observable<IItem> {
    console.log("trash store getItem",id);
    return this.getItemListing()
      .map(trashListing => { 
        console.log("trash store getItem trashListing", trashListing);
        return getItem(trashListing, id)});
  }

  //New
  public setItemProcessed(id: string) {
    //console.log('store setUpdateProcessed id:',event);
    this.store.dispatch(createAction(TrashListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(TrashListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(TrashListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(TrashListingStore.FILTER_USER, {user}));
  }

}
