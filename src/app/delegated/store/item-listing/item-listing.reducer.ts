import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { DelegatedItemListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
} from '../../../shared/barrel';

export function delegatedItemListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case DelegatedItemListingStore.RETRIEVE:
      //console.log("delegateditem reducer RETRIEVE");
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case DelegatedItemListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.delegatedItems
      return {
        ...state,
        isLoading: false,
        items: items
      };
    case DelegatedItemListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case DelegatedItemListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case DelegatedItemListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          userCreated: action.payload.user
        }
      };
    case DelegatedItemListingStore.UPDATE_PROCESSED:
      //console.log("delegateditem reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        delegatedItems: updateChildObject(
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
