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
      console.log("trash reducer RETRIEVE");
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case TrashListingStore.RETRIEVE_SUCCESS:
      const items = action.payload.trash
        //.map(item => ({ ...item, favorite: false}));

      // //Get ids
      // var ids = trash.map(function (i) {
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
      console.log("trash reducer RETRIEVE_SUCCESS");
      return {
        ...state,
        isLoading: false,
        items: items,
        // linkedIds: ids
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
    // case TrashListingStore.TOGGLE_FAVORITE_FILTER:
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       favorites: !state.filters.favorites
    //     }
    //   };
    // case TrashListingStore.TOGGLE_FAVORITE:
    //   return {
    //     ...state,
    //     trash: updateChildObject(
    //       state.trash,
    //       (game) => game.id === action.payload.id,
    //       (game) => ({favorite: !game.favorite}),
    //     )
    //   };
    case TrashListingStore.UPDATE_PROCESSED:
      console.log("trash reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        trash: updateChildObject(
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
