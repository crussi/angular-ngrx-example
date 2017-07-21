import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { SomedayListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
  sortItemsByDateCreated
} from '../../../shared/barrel';

export function somedayListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case SomedayListingStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case SomedayListingStore.RETRIEVE_SUCCESS:
      const items = sortItemsByDateCreated(action.payload.someday);
      return {
        ...state,
        isLoading: false,
        items: items,
      };
    case SomedayListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case SomedayListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case SomedayListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          userCreated: action.payload.user
        }
      };
    case SomedayListingStore.UPDATE_PROCESSED:
      let obj =  {
        ...state,
        someday: updateChildObject(
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
