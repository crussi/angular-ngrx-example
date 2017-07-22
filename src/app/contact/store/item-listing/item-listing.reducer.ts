import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { ContactListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
  sortItemsByDateCreated
} from '../../../shared/barrel';

export function contactListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case ContactListingStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case ContactListingStore.RETRIEVE_SUCCESS:
      const items = sortItemsByDateCreated(action.payload.contact);
      return {
        ...state,
        isLoading: false,
        items: items,
      };
    case ContactListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case ContactListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case ContactListingStore.FILTER_CONTACT:
      return {
        ...state,
        filters: {
          ...state.filters,
          contactCreated: action.payload.contact
        }
      };
    case ContactListingStore.UPDATE_PROCESSED:
      let obj =  {
        ...state,
        contact: updateChildObject(
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
