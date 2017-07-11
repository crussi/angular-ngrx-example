import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { NextListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
} from '../../../shared/barrel';

export function nextListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case NextListingStore.RETRIEVE:
      console.log("next reducer RETRIEVE");
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case NextListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.next
        //.map(item => ({ ...item, favorite: false}));

      // //Get ids
      // var ids = next.map(function (i) {
      //   return [i.id];
      // });
      // //Assign prev and next id for each id
      // for (let n in ids) {
      //   let m = +n;
      //   if (m > 0 && m < ids.length-1) {
      //     ids[m].push(ids[m-1][0],ids[m+1][0]);
      //   } else if (m == ids.length-1) {
      //     ids[m].push(ids[m - 1][0], "0");
      //   }
      //   else if (m == 0) {
      //     ids[m].push("0", ids[m + 1][0]);
      //   }
      // } 

      //   console.log('got it', ids);      
      console.log("next reducer RETRIEVE_SUCCESS");
      return {
        ...state,
        isLoading: false,
        items: items,
        // linkedIds: ids
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
    // case NextListingStore.TOGGLE_FAVORITE_FILTER:
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       favorites: !state.filters.favorites
    //     }
    //   };
    // case NextListingStore.TOGGLE_FAVORITE:
    //   return {
    //     ...state,
    //     next: updateChildObject(
    //       state.next,
    //       (game) => game.id === action.payload.id,
    //       (game) => ({favorite: !game.favorite}),
    //     )
    //   };
    case NextListingStore.UPDATE_PROCESSED:
      console.log("next reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        next: updateChildObject(
          state.items,
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
