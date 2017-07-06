import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { ListItemListingStore } from './list-item-listing.store';
import {
    createDefaultListItemListing,
    IListItemListing,
} from '../../interfaces';

export function trashItemListingReducer(
    state: IListItemListing,
    action: Action
): IListItemListing {
    state = state || createDefaultListItemListing();

    switch (action.type) {
        case ListItemListingStore.RETRIEVE_TRASH:
            //console.log("trash list reducer RETRIEVE");
            return {
                ...state,
                isLoading: true,
                loadingError: null
            };
        case ListItemListingStore.RETRIEVE_SUCCESS_TRASH:
            const listItems = action.payload.listItems
            //console.log("trash list reducer RETRIEVE_TRASH_SUCCESS action.payload.listItems", action.payload.listItems);
            return {
                ...state,
                isLoading: false,
                listItems: listItems,
                // linkedIds: ids
            };
        case ListItemListingStore.RETRIEVE_ERROR_TRASH:
            return {
                ...state,
                isLoading: false,
                loadingError: action.payload.error
            };
        case ListItemListingStore.SEARCH_TRASH:
            return {
                ...state,
                searchQuery: action.payload.query
            };
        default:
            return state;
    }
}
