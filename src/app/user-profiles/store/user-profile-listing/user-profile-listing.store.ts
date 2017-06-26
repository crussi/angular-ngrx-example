import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import {
  getUserProfiles,
  getUsers,
  getUserProfile,
  getNextUserProfileId,
    IUserProfileFilters,
  IUserProfileListing,
} from '../../interfaces';
import { IUserProfile } from '../../../shared/barrel';

@Injectable()
export class UserProfileListingStore {

  public static RETRIEVE = 'USER_PROFILE_LISTING_RETRIEVE';
  public static RETRIEVE_SUCCESS = 'USER_PROFILE_LISTING_RETRIEVE_SUCCESS';
  public static RETRIEVE_ERROR = 'USER_PROFILE_LISTING_RETRIEVE_ERROR';
  public static SEARCH = 'USER_PROFILE_LISTING_SEARCH';
  public static FILTER_USER = 'USER_PROFILE_LISTING_FILTER_USER';
  public static TOGGLE_FAVORITE_FILTER = 'USER_PROFILE_LISTING_FILTER_FAVORITES';
  public static TOGGLE_FAVORITE = 'USER_PROFILE_TOGGLE_FAVORITE';
  public static UPDATE_PROCESSED = 'USER_PROFILE_LISTING_UPDATE_PROCESSED';

  constructor(private store: Store<IAppState>) {}

  public getUserProfileListing(): Observable<IUserProfileListing> {
    //console.log('inside store getUserProfileListing');
    return this.store.select(appState => { 
      //console.log('store getUserProfileListing appState',appState);
      return appState.userProfileListing
    });
  }

  public getUserProfileFilters(): Observable<IUserProfileFilters> {
    return this.getUserProfileListing()
      .map(userProfileListing => userProfileListing.filters);
  }

  public getUserProfiles(): Observable<Array<IUserProfile>> {
    return this.getUserProfileListing()
      .map(userProfileListing => getUserProfiles(userProfileListing));
  }

  public getUsers(): Observable<Array<string>> {
    return this.getUserProfileListing()
      .map(userProfileListing => getUsers(userProfileListing));
  }
  

  public getUserProfile(id: string): Observable<IUserProfile> {
    return this.getUserProfileListing()
      .map(userProfileListing => getUserProfile(userProfileListing, id));
  }

  //New
  public getNextUserProfileId(id: string): Observable<string> {
    return this.getUserProfileListing()
      .map(userProfileListing => getNextUserProfileId(userProfileListing,id));
  }

  public retrieve() {
    this.store.dispatch(createAction(UserProfileListingStore.RETRIEVE));
  }

  public search(query: string) {
    this.store.dispatch(createAction(UserProfileListingStore.SEARCH, {query}));
  }

  public filterUser(user: string) {
    this.store.dispatch(createAction(UserProfileListingStore.FILTER_USER, {user}));
  }

  public toggleFavoriteFilter() {
    this.store.dispatch(createAction(UserProfileListingStore.TOGGLE_FAVORITE_FILTER));
  }

  public toggleFavorite(id: string) {
    this.store.dispatch(createAction(UserProfileListingStore.TOGGLE_FAVORITE, {id}));
  }

}
