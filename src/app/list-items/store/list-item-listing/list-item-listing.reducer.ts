import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { ListItemListingStore } from './list-item-listing.store';
import {
  createDefaultListItemListing,
  IListItemListing,
} from '../../interfaces';

export function listItemListingReducer(
  state: IListItemListing,
  action: Action
): IListItemListing {
  state = state || createDefaultListItemListing();

  switch (action.type) {
    case ListItemListingStore.RETRIEVE:
      console.log("list reducer RETRIEVE");
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case ListItemListingStore.RETRIEVE_SUCCESS:
      const listItems = action.payload.listItems
        //.map(item => ({ ...item, favorite: false}));

      // //Get ids
      // var ids = listItems.map(function (i) {
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
      console.log("list reducer RETRIEVE_SUCCESS");
      return {
        ...state,
        isLoading: false,
        listItems: listItems,
        // linkedIds: ids
      };
    case ListItemListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case ListItemListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case ListItemListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          user: action.payload.user
        }
      };
    // case ListItemListingStore.TOGGLE_FAVORITE_FILTER:
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       favorites: !state.filters.favorites
    //     }
    //   };
    // case ListItemListingStore.TOGGLE_FAVORITE:
    //   return {
    //     ...state,
    //     listItems: updateChildObject(
    //       state.listItems,
    //       (game) => game.id === action.payload.id,
    //       (game) => ({favorite: !game.favorite}),
    //     )
    //   };
    case ListItemListingStore.UPDATE_PROCESSED:
      console.log("list reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        listItems: updateChildObject(
          state.listItems,
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
