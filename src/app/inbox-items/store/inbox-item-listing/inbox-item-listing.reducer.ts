import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { InboxItemListingStore } from './inbox-item-listing.store';
import {
  createDefaultInboxItemListing,
  IInboxItemListing,
} from '../../interfaces';

export function inboxItemListingReducer(
  state: IInboxItemListing,
  action: Action
): IInboxItemListing {
  state = state || createDefaultInboxItemListing();

  switch (action.type) {
    case InboxItemListingStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case InboxItemListingStore.RETRIEVE_SUCCESS:
      const inboxItems = action.payload.inboxItems
        .map(game => ({...game, favorite: false}));

      return {
        ...state,
        isLoading: false,
        inboxItems: inboxItems
      };
    case InboxItemListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case InboxItemListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case InboxItemListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          user: action.payload.user
        }
      };
    case InboxItemListingStore.TOGGLE_FAVORITE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          favorites: !state.filters.favorites
        }
      };
    case InboxItemListingStore.TOGGLE_FAVORITE:
      return {
        ...state,
        inboxItems: updateChildObject(
          state.inboxItems,
          (game) => game.id === action.payload.id,
          (game) => ({favorite: !game.favorite}),
        )
      };
    case InboxItemListingStore.UPDATE_PROCESSED:
      console.log("inbox reducer UPDATE_PROCESSED", action.payload.id);
      // return {
      //   ...state,
      //   inboxItems: updateChildObject(
      //     state.inboxItems,
      //     (item) => item.id === action.payload.id,
      //     (item) => ({ processed: true }),
      //   )
      // };
      let obj =  {
        ...state,
        inboxItems: updateChildObject(
          state.inboxItems,
          (item) => item.id === action.payload.id,
          (item) => ({processed: true }),
        )
      };       
      console.log('UPDATE_PROCESSED',obj);
      return obj;
      default:
      return state;
  }
}
