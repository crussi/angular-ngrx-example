import { IInboxItemListing } from './inbox-item-listing.interface';
import { createDefaultInboxItemFilters } from './inbox-item-filters.functions';
import {
  inboxItemMatchesFavoritesFilter,
  inboxItemMatchesUserFilter,
  inboxItemMatchesSearchQuery
} from '../inbox-item';

export function createDefaultInboxItemListing(): IInboxItemListing {
  return {
    isLoading: false,
    loadingError: null,
    filters: createDefaultInboxItemFilters(),
    searchQuery: null,
    inboxItems: [],
    linkedIds: []
  };
}

function getFilteredInboxItems(inboxItemListing: IInboxItemListing) {
  return inboxItemListing.inboxItems
    .filter(inboxItem => inboxItemMatchesSearchQuery(inboxItem, inboxItemListing.searchQuery))
    .filter(inboxItem => inboxItemMatchesUserFilter(inboxItem, inboxItemListing.filters))
    .filter(inboxItem => inboxItemMatchesFavoritesFilter(inboxItem, inboxItemListing.filters));
}

export function getInboxItems(inboxItemListing: IInboxItemListing) {
  return Boolean(inboxItemListing) ?
    getFilteredInboxItems(inboxItemListing).sort(
      (inboxItemA, inboxItemB) => inboxItemA.title.localeCompare(inboxItemB.title)
    ) :
    [];
}

export function getInboxItem(inboxItemListing: IInboxItemListing, id: string) {
  return Boolean(inboxItemListing) ?
    inboxItemListing.inboxItems.find(inboxItem => inboxItem.id === id) :
    null;
}

export function getNextInboxItem(inboxItemListing: IInboxItemListing, id: string) {
  if (Boolean(inboxItemListing)) {
    let inboxItems = inboxItemListing.inboxItems;
    let ids = inboxItemListing.linkedIds;
    let nextId = "0";
    for (let i in inboxItemListing.linkedIds) {
      if (ids[i][0] == id) {
        nextId = ids[i][2];
        console.log("found next id",nextId);
        break;
      }
    }
    if (nextId != "0") {
      for (let item of inboxItems) {
        if (item.id == nextId) {
          console.log("returning item",item);
          return item;
        }
      }
    }
    console.log("returning null");
    return null;
  } else {
    return null;
  }
  // return Boolean(inboxItemListing) ?
  //   inboxItemListing.inboxItems.find(inboxItem => !inboxItem.processed ) :
  //   null;
}

//New content is not actual ???
// export function setUpdateProcessed(inboxItemListing: IInboxItemListing, id: string) {
//   return Boolean(inboxItemListing) ?
//     inboxItemListing.inboxItems.find(inboxItem => inboxItem.processed !== true) :
//     null;
// }