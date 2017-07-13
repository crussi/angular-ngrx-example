import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getItems,
  getItem,
  //getNextItemId,
  IItemListing,
} from '../../../shared/barrel';
import { IItemFilters } from '../../../shared/barrel';

import { ItemProcessed } from '../../../shared/barrel';
import { IItem } from '../../../shared/barrel';

@Injectable()
export class SomedayListingStore {

  public static RETRIEVE = 'SOMEDAY_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'SOMEDAY_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'SOMEDAY_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'SOMEDAY_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'SOMEDAY_ITEM_LISTING_FILTER_USER';
  public static UPDATE_PROCESSED = 'SOMEDAY_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IItemListing> {
    return this.store.select(appState => { 
      return appState.somedayListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(somedayListing => somedayListing.filters);
  }

  public getItems(): Observable<Array<IItem>> {
    return this.getItemListing()
      .map(somedayListing => getItems(somedayListing));
  }

  public getItem(id: string): Observable<IItem> {
    //console.log("someday store getItem",id);
    return this.getItemListing()
      .map(somedayListing => { 
        //console.log("someday store getItem somedayListing", somedayListing);
        return getItem(somedayListing, id)});
  }

  //New
  public setItemProcessed(id: string) {
    //console.log('store setUpdateProcessed id:',event);
    this.store.dispatch(createAction(SomedayListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(SomedayListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(SomedayListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(SomedayListingStore.FILTER_USER, {user}));
  }

}
