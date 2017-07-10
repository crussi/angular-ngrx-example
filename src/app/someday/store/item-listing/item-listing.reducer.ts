import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { SomedayListingStore } from './item-listing.store';
import {
  createDefaultItemListing,
  IItemListing,
} from '../../../shared/barrel';

export function somedayListingReducer(
  state: IItemListing,
  action: Action
): IItemListing {
  state = state || createDefaultItemListing();

  switch (action.type) {
    case SomedayListingStore.RETRIEVE:
      console.log("someday reducer RETRIEVE");
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case SomedayListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.someday
        //.map(item => ({ ...item, favorite: false}));

      // //Get ids
      // var ids = someday.map(function (i) {
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
      console.log("someday reducer RETRIEVE_SUCCESS");
      return {
        ...state,
        isLoading: false,
        items: items,
        // linkedIds: ids
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
    // case SomedayListingStore.TOGGLE_FAVORITE_FILTER:
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       favorites: !state.filters.favorites
    //     }
    //   };
    // case SomedayListingStore.TOGGLE_FAVORITE:
    //   return {
    //     ...state,
    //     someday: updateChildObject(
    //       state.someday,
    //       (game) => game.id === action.payload.id,
    //       (game) => ({favorite: !game.favorite}),
    //     )
    //   };
    case SomedayListingStore.UPDATE_PROCESSED:
      console.log("someday reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        someday: updateChildObject(
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
