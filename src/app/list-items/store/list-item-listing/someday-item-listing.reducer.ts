import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { ListItemListingStore } from './list-item-listing.store';
import {
    createDefaultListItemListing,
    IListItemListing,
} from '../../interfaces';

export function somedayItemListingReducer(
    state: IListItemListing,
    action: Action
): IListItemListing {
    state = state || createDefaultListItemListing();

    switch (action.type) {
        case ListItemListingStore.RETRIEVE_SOMEDAY:
            console.log("someday list reducer RETRIEVE");
            return {
                ...state,
                isLoading: true,
                loadingError: null
            };
        case ListItemListingStore.RETRIEVE_SUCCESS_SOMEDAY:
            const listItems = action.payload.listItems
            console.log("trash list reducer RETRIEVE_SOMEDAY_SUCCESS action.payload.listItems", action.payload.listItems);
            return {
                ...state,
                isLoading: false,
                listItems: listItems,
                // linkedIds: ids
            };
        case ListItemListingStore.RETRIEVE_ERROR_SOMEDAY:
            return {
                ...state,
                isLoading: false,
                loadingError: action.payload.error
            };
        default:
            return state;
    }
}
