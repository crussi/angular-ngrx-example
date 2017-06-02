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
    inboxItems: []
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
