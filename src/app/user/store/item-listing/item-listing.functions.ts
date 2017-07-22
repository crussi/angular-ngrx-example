import {
    //getItems,
    //getItem,
    IItemListing,
    getFilteredItems
} from '../../../shared/barrel';

export function getUserNames(userListing: IItemListing) {
    return Boolean(userListing) ?
        getFilteredItems(userListing).sort(
            (userA, userB) => userA.name.localeCompare(userB.name)
        ).map(user => user.name)
        : [];
}