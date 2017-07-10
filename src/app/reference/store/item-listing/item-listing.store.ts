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
export class ReferenceListingStore {

  public static RETRIEVE = 'REFERENCE_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'REFERENCE_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'REFERENCE_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'REFERENCE_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'REFERENCE_ITEM_LISTING_FILTER_USER';
  public static UPDATE_PROCESSED = 'REFERENCE_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IItemListing> {
    return this.store.select(appState => { 
      return appState.referenceListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(referenceListing => referenceListing.filters);
  }

  public getItems(): Observable<Array<IItem>> {
    return this.getItemListing()
      .map(referenceListing => getItems(referenceListing));
  }

  public getItem(id: string): Observable<IItem> {
    console.log("reference store getItem",id);
    return this.getItemListing()
      .map(referenceListing => { 
        console.log("reference store getItem referenceListing", referenceListing);
        return getItem(referenceListing, id)});
  }

  //New
  public setItemProcessed(id: string) {
    //console.log('store setUpdateProcessed id:',event);
    this.store.dispatch(createAction(ReferenceListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(ReferenceListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(ReferenceListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(ReferenceListingStore.FILTER_USER, {user}));
  }

}
