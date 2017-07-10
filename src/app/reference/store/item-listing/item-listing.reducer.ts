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
      console.log("reference reducer RETRIEVE");
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case ReferenceListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.reference
        //.map(item => ({ ...item, favorite: false}));

      // //Get ids
      // var ids = reference.map(function (i) {
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
      console.log("reference reducer RETRIEVE_SUCCESS");
      return {
        ...state,
        isLoading: false,
        items: items,
        // linkedIds: ids
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
    // case ReferenceListingStore.TOGGLE_FAVORITE_FILTER:
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       favorites: !state.filters.favorites
    //     }
    //   };
    // case ReferenceListingStore.TOGGLE_FAVORITE:
    //   return {
    //     ...state,
    //     reference: updateChildObject(
    //       state.reference,
    //       (game) => game.id === action.payload.id,
    //       (game) => ({favorite: !game.favorite}),
    //     )
    //   };
    case ReferenceListingStore.UPDATE_PROCESSED:
      console.log("reference reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        reference: updateChildObject(
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
