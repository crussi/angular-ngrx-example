import { Action } from '@ngrx/store';
import { updateChildObject } from '../../../store/reducer-helpers';
import { UserProfileListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
} from '../../../shared/barrel';

export function userProfileListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case UserProfileListingStore.RETRIEVE:
      //console.log("userProfile reducer RETRIEVE");
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case UserProfileListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.userProfiles
      return {
        ...state,
        isLoading: false,
        items: items
      };
    case UserProfileListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case UserProfileListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case UserProfileListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          userCreated: action.payload.user
        }
      };
    case UserProfileListingStore.UPDATE_PROCESSED:
      //console.log("userProfile reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        userProfiles: updateChildObject(
          state.items,
          (item) => item.id === action.payload.id,
          (item) => ({processed: true }),
        )
      };       
      //console.log('UPDATE_PROCESSED',obj);
      return obj;
      default:
      return state;
  }
}
