import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { NextActionListingStore } from './next-action-listing.store';
import {
  createDefaultNextActionListing,
  INextActionListing,
} from '../../interfaces';

export function nextActionListingReducer(
  state: INextActionListing,
  action: Action
): INextActionListing {
  state = state || createDefaultNextActionListing();

  switch (action.type) {
    case NextActionListingStore.RETRIEVE:
      console.log("nextaction reducer RETRIEVE");
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case NextActionListingStore.RETRIEVE_SUCCESS:
      const nextActions = action.payload.nextActions
        //.map(item => ({ ...item, favorite: false}));

      // //Get ids
      // var ids = nextActions.map(function (i) {
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
      console.log("nextaction reducer RETRIEVE_SUCCESS");
      return {
        ...state,
        isLoading: false,
        nextActions: nextActions,
        // linkedIds: ids
      };
    case NextActionListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case NextActionListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case NextActionListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          userCreated: action.payload.user
        }
      };
    // case NextActionListingStore.TOGGLE_FAVORITE_FILTER:
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       favorites: !state.filters.favorites
    //     }
    //   };
    // case NextActionListingStore.TOGGLE_FAVORITE:
    //   return {
    //     ...state,
    //     nextActions: updateChildObject(
    //       state.nextActions,
    //       (game) => game.id === action.payload.id,
    //       (game) => ({favorite: !game.favorite}),
    //     )
    //   };
    case NextActionListingStore.UPDATE_PROCESSED:
      console.log("nextaction reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        nextActions: updateChildObject(
          state.nextActions,
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
