import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { ListItemListingStore } from './list-item-listing.store';
import {
    createDefaultListItemListing,
    IListItemListing,
} from '../../interfaces';

export function referenceItemListingReducer(
    state: IListItemListing,
    action: Action
): IListItemListing {
    state = state || createDefaultListItemListing();

    switch (action.type) {
        case ListItemListingStore.RETRIEVE_REFERENCE:
            console.log("reference list reducer RETRIEVE");
            return {
                ...state,
                isLoading: true,
                loadingError: null
            };
        case ListItemListingStore.RETRIEVE_SUCCESS_REFERENCE:
            const listItems = action.payload.listItems
            console.log("reference list reducer RETRIEVE_TRASH_SUCCESS action.payload.listItems", action.payload.listItems);
            return {
                ...state,
                isLoading: false,
                listItems: listItems,
                // linkedIds: ids
            };
        case ListItemListingStore.RETRIEVE_ERROR_REFERENCE:
            return {
                ...state,
                isLoading: false,
                loadingError: action.payload.error
            };
        case ListItemListingStore.SEARCH_REFERENCE:
            return {
                ...state,
                searchQuery: action.payload.query
            };

        default:
            return state;
    }
}
