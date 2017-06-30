import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getListItems,
  getListItem,
  IListItemFilters,
  IListItemListing,
} from '../../interfaces';
import { IListItem, TrashItem } from '../../interfaces';

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

  public static RETRIEVE_TRASH = 'TRASH_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS_TRASH = 'TRASH_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR_TRASH = 'TRASH_ITEM_LISTING_RETRIEVE_ERROR';

  public static RETRIEVE_SOMEDAY = 'SOMEDAY_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS_SOMEDAY = 'SOMEDAY_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR_SOMEDAY = 'SOMEDAY_ITEM_LISTING_RETRIEVE_ERROR';

  public static RETRIEVE_REFERENCE = 'REFERENCE_ITEM_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS_REFERENCE = 'REFERENCE_ITEM_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR_REFERENCE = 'REFERENCE_ITEM_LISTING_RETRIEVE_ERROR';

  constructor(private store: Store<IAppState>) {}

  public getListItemListing(): Observable<IListItemListing> {
    return this.store.select((appState) => {
      //console.log('getListItemListing appState', appState);
      return appState.listItemListing;
    });
  }

  public getTrashItemListing(): Observable<IListItemListing> {
    return this.store.select((appState) => {
      //console.log('***** getTrashItemListing appState', appState);
      return appState.trashItemListing;
    });
  }

  public getSomedayItemListing(): Observable<IListItemListing> {
    return this.store.select((appState) => {
      //console.log('***** getSomedayItemListing appState', appState);
      return appState.somedayItemListing;
    });
  }

  public getReferenceItemListing(): Observable<IListItemListing> {
    return this.store.select((appState) => {
      console.log('***** getReferenceItemListing appState', appState);
      return appState.referenceItemListing;
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

  //trash
  public getTrashItems(): Observable<Array<IListItem>> {
    //console.log('list-item-listing.store getListItems');
    //console.log('***** getTrashItems ');
    return this.getTrashItemListing()
      .map(listItemListing => getListItems(listItemListing));
  }  

  //someday
  public getSomedayItems(): Observable<Array<IListItem>> {
    return this.getSomedayItemListing()
      .map(listItemListing => getListItems(listItemListing));
  }  

  //reference
  public getReferenceItems(): Observable<Array<IListItem>> {
    return this.getReferenceItemListing()
      .map(listItemListing => getListItems(listItemListing));
  } 

  public getListItem(id: string): Observable<IListItem> {
    return this.getListItemListing()
      .map(listItemListing => getListItem(listItemListing, id));
  }

  //trash
  public getTrashItem(id: string): Observable<IListItem> {
    return this.getTrashItemListing()
      .map(listItemListing => getListItem(listItemListing, id));
  }

  //someday
  public getSomedayItem(id: string): Observable<IListItem> {
    //console.log('HI Im in getSomedayItem');
    return this.getSomedayItemListing()
      .map(listItemListing => getListItem(listItemListing, id));
  }

  //reference
  public getReferenceItem(id: string): Observable<IListItem> {
    console.log('HI Im in getReferenceItem');
    return this.getReferenceItemListing()
      .map(listItemListing => getListItem(listItemListing, id));
  }

  public retrieve(listType) {
    //console.log('list-item-listing.store retrieve');
    switch(listType) {
      case 'all':
        this.store.dispatch(createAction(ListItemListingStore.RETRIEVE));
        break;
      case 'trash':
        this.store.dispatch(createAction(ListItemListingStore.RETRIEVE_TRASH));
        break;
      case 'someday':
        this.store.dispatch(createAction(ListItemListingStore.RETRIEVE_SOMEDAY));
        break;
      case 'reference':
        console.log('this.store.dispatch RETRIEVE_REFERENCE');
        this.store.dispatch(createAction(ListItemListingStore.RETRIEVE_REFERENCE));
        break;        
    }
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
