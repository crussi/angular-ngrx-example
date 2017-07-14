import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { TrashListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
} from '../../../shared/barrel';

export function trashListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case TrashListingStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case TrashListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.trash
      return {
        ...state,
        isLoading: false,
        items: items,
      };
    case TrashListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case TrashListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case TrashListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          userCreated: action.payload.user
        }
      };
    case TrashListingStore.UPDATE_PROCESSED:
      let obj =  {
        ...state,
        trash: updateChildObject(
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
