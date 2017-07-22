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
export class ProjectListingStore {

  public static RETRIEVE = 'PROJECT_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'PROJECT_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'PROJECT_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'PROJECT_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'PROJECT_ITEM_LISTING_FILTER_USER';
  public static UPDATE_PROCESSED = 'PROJECT_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getItemListing(): Observable<IItemListing> {
    return this.store.select(appState => { 
      return appState.projectListing 
    });
  }

  public getItemFilters(): Observable<IItemFilters> {
    return this.getItemListing()
      .map(projectListing => projectListing.filters);
  }

  public getItems(): Observable<Array<IItem>> {
    return this.getItemListing()
      .map(projectListing => getItems(projectListing,null));
  }

  public getItem(id: string): Observable<IItem> {
    return this.getItemListing()
      .map(projectListing => { 
        return getItem(projectListing, id)});
  }

  public setItemProcessed(id: string) {
    this.store.dispatch(createAction(ProjectListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(ProjectListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(ProjectListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(ProjectListingStore.FILTER_USER, {user}));
  }

}
