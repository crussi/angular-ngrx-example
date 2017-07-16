import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { UserProfileListingStore } from './user-profile-listing.store';
import {
  createDefaultUserProfileListing,
  IUserProfileListing,
} from '../../interfaces';

export function userProfileListingReducer(
  state: IUserProfileListing,
  action: Action
): IUserProfileListing {
  state = state || createDefaultUserProfileListing();

  switch (action.type) {
    case UserProfileListingStore.RETRIEVE:
      //console.log("user profile reducer RETRIEVE");
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case UserProfileListingStore.RETRIEVE_SUCCESS:
      const userProfiles = action.payload.userProfiles
        //.map(item => ({ ...item, favorite: false}));

      // //Get ids
      // var ids = userProfiles.map(function (i) {
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
      //console.log("user profile reducer RETRIEVE_SUCCESS", userProfiles);
      return {
        ...state,
        isLoading: false,
        userProfiles: userProfiles,
        // linkedIds: ids
      };
    case UserProfileListingStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case UserProfileListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case UserProfileListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          user: action.payload.user
        }
      };
    // case UserProfileListingStore.TOGGLE_FAVORITE_FILTER:
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       favorites: !state.filters.favorites
    //     }
    //   };
    // case UserProfileListingStore.TOGGLE_FAVORITE:
    //   return {
    //     ...state,
    //     userProfiles: updateChildObject(
    //       state.userProfiles,
    //       (game) => game.id === action.payload.id,
    //       (game) => ({favorite: !game.favorite}),
    //     )
    //   };
    case UserProfileListingStore.UPDATE_PROCESSED:
      //console.log("user profile reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        userProfiles: updateChildObject(
          state.userProfiles,
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
