import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { ContactListingStore } from './contact-listing.store';
import {
  createDefaultContactListing,
  IContactListing,
} from '../../interfaces';

export function contactListingReducer(
  state: IContactListing,
  action: Action
): IContactListing {
  state = state || createDefaultContactListing();

  switch (action.type) {
    case ContactListingStore.RETRIEVE:
      console.log('ContactListingStore.RETRIEVE');
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case ContactListingStore.RETRIEVE_SUCCESS:
      console.log('ContactListingStore RETRIEVE_SUCCESS');
      const contacts = action.payload.contacts
        //.map(item => ({ ...item, favorite: false}));

      // //Get ids
      // var ids = contacts.map(function (i) {
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
      //console.log("user profile reducer RETRIEVE_SUCCESS", contacts);
      return {
        ...state,
        isLoading: false,
        contacts: contacts,
        // linkedIds: ids
      };
    case ContactListingStore.RETRIEVE_ERROR:
      console.log('ContactListingStore.RETRIEVE_ERROR');
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    case ContactListingStore.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };
    case ContactListingStore.FILTER_USER:
      return {
        ...state,
        filters: {
          ...state.filters,
          user: action.payload.user
        }
      };
    // case ContactListingStore.TOGGLE_FAVORITE_FILTER:
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       favorites: !state.filters.favorites
    //     }
    //   };
    // case ContactListingStore.TOGGLE_FAVORITE:
    //   return {
    //     ...state,
    //     contacts: updateChildObject(
    //       state.contacts,
    //       (game) => game.id === action.payload.id,
    //       (game) => ({favorite: !game.favorite}),
    //     )
    //   };
    case ContactListingStore.UPDATE_PROCESSED:
      //console.log("user profile reducer UPDATE_PROCESSED", action.payload.id);
      let obj =  {
        ...state,
        contacts: updateChildObject(
          state.contacts,
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
