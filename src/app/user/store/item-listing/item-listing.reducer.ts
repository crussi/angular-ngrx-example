import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { UserListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
} from '../../../shared/barrel';

export function userListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case UserListingStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case UserListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.user
      return {
        ...state,
        isLoading: false,
        items: items,
      };
    case UserListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case UserListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case UserListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          userCreated: action.payload.user
        }
      };
    case UserListingStore.UPDATE_PROCESSED:
      let obj =  {
        ...state,
        user: updateChildObject(
          state.items,
          (item) => item.id === action.payload.id,
          (item) => ({processed: true }),
        )
      };       
      return obj;
      default:
      return state;
  }
}
