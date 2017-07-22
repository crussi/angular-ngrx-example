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
      return {
        ...state,
        isLoading: false,
        contacts: contacts,
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
    case ContactListingStore.UPDATE_PROCESSED:
      let obj =  {
        ...state,
        contacts: updateChildObject(
          state.contacts,
          (item) => item.id === action.payload.id,
          (item) => ({processed: true }),
        )
      };       
      return obj;
      default:
      return state;
  }
}
