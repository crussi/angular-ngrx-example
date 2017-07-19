import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { ProjectListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
} from '../../../shared/barrel';

export function projectListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case ProjectListingStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case ProjectListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.project
      return {
        ...state,
        isLoading: false,
        items: items,
      };
    case ProjectListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case ProjectListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case ProjectListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          userCreated: action.payload.user
        }
      };
    case ProjectListingStore.UPDATE_PROCESSED:
      let obj =  {
        ...state,
        project: updateChildObject(
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
