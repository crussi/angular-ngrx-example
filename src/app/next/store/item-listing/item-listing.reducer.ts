import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { NextListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
  sortItemsByDateCreated

} from '../../../shared/barrel';

export function nextListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case NextListingStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case NextListingStore.RETRIEVE_SUCCESS:
      const items = sortItemsByDateCreated(action.payload.next);
      return {
        ...state,
        isLoading: false,
        items: items,
      };
    case NextListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case NextListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case NextListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          userCreated: action.payload.user
        }
      };
    case NextListingStore.UPDATE_PROCESSED:
      let obj =  {
        ...state,
        next: updateChildObject(
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
