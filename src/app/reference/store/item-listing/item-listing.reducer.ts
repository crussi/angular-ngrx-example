import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { ReferenceListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
} from '../../../shared/barrel';

export function referenceListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case ReferenceListingStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case ReferenceListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.reference
      return {
        ...state,
        isLoading: false,
        items: items,
      };
    case ReferenceListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case ReferenceListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case ReferenceListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          userCreated: action.payload.user
        }
      };
    case ReferenceListingStore.UPDATE_PROCESSED:
      let obj =  {
        ...state,
        reference: updateChildObject(
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
