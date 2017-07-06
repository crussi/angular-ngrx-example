import { IListItemListing } from './list-item-listing.interface';
import { IListItem } from '../../interfaces';
import { createDefaultListItemFilters } from './list-item-filters.functions';
import {
  listItemMatchesUserFilter,
  listItemMatchesSearchQuery
} from '../list-item';

export function createDefaultListItemListing(): IListItemListing {
  return {
    isLoading: false,
    loadingError: null,
    filters: createDefaultListItemFilters(),
    searchQuery: null,
    listItems: []
  };
}

function getFilteredListItems(listItemListing: IListItemListing) {
  return listItemListing.listItems
    .filter(listItem => listItemMatchesSearchQuery(listItem, listItemListing.searchQuery))
    .filter(listItem => listItemMatchesUserFilter(listItem, listItemListing.filters))
}

export function getListItems(listItemListing: IListItemListing) {
  //console.log('list-item-listing.function getListItems', listItemListing);
  return Boolean(listItemListing) ?
    getFilteredListItems(listItemListing).sort(
      (listItemA, listItemB) => new Date(listItemA.dateCreated).getTime() - new Date(listItemB.dateCreated).getTime() 
    ) //.filter(listItem => listItem.processed != false)
 
    : [];
}

export function getListItem(listItemListing: IListItemListing, id: string) {
  // return Boolean(listItemListing) ?
  //   listItemListing.listItems.find(listItem => listItem.id === id) :
  //   null;
  console.log('.function getListItem listItemListing id:' + id, listItemListing);
  if (Boolean(listItemListing)) {
      let listItems = listItemListing.listItems;
      let listItem: IListItem = null;
      for (var i = 0; i < listItems.length; i++) {
          if (listItems[i].id == id) {
            listItem = listItems[i];
            break;
          }
      }
      return listItem;
  }
  return null;
}
