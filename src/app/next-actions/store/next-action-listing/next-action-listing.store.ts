import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getNextActions,
  getNextAction,
  getNextNextActionId,
    INextActionFilters,
  INextActionListing,
} from '../../interfaces';
import { NextActionProcessed, INextAction } from '../../../shared/barrel';

@Injectable()
export class NextActionListingStore {

  public static RETRIEVE = 'NEXT_ACTION_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'NEXT_ACTION_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'NEXT_ACTION_ITEM_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'NEXT_ACTION_ITEM_LISTING_SEARCH';
  public static FILTER_USER = 'NEXT_ACTION_ITEM_LISTING_FILTER_USER';
  public static TOGGLE_FAVORITE_FILTER = 'NEXT_ACTION_ITEM_LISTING_FILTER_FAVORITES';
  public static TOGGLE_FAVORITE = 'NEXT_ACTION_ITEM_TOGGLE_FAVORITE';
  public static UPDATE_PROCESSED = 'NEXT_ACTION_ITEM_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getNextActionListing(): Observable<INextActionListing> {
    return this.store.select(appState => appState.nextActionListing);
  }

  public getNextActionFilters(): Observable<INextActionFilters> {
    return this.getNextActionListing()
      .map(nextActionListing => nextActionListing.filters);
  }

  public getNextActions(): Observable<Array<INextAction>> {
    return this.getNextActionListing()
      .map(nextActionListing => getNextActions(nextActionListing));
  }

  public getNextAction(id: string): Observable<INextAction> {
    return this.getNextActionListing()
      .map(nextActionListing => getNextAction(nextActionListing, id));
  }

  //New
  public getNextNextActionId(id: string): Observable<string> {
    return this.getNextActionListing()
      .map(nextActionListing => getNextNextActionId(nextActionListing,id));
  }

  //New
  public setNextActionProcessed(id: string) {
    console.log('store setUpdateProcessed id:',event);
    this.store.dispatch(createAction(NextActionListingStore.UPDATE_PROCESSED, {id}));
  }

  public retrieve() {
    this.store.dispatch(createAction(NextActionListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(NextActionListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(NextActionListingStore.FILTER_USER, {user}));
  }

  public toggleFavoriteFilter() {
    this.store.dispatch(createAction(NextActionListingStore.TOGGLE_FAVORITE_FILTER));
  }

  public toggleFavorite(id: string) {
    this.store.dispatch(createAction(NextActionListingStore.TOGGLE_FAVORITE, {id}));
  }

}
