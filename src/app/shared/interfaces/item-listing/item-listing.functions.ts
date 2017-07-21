import { IItemListing } from './item-listing.interface';
import { IItem } from '../item';
import { createDefaultItemFilters } from '../item-filters';
import {
  itemMatchesUserFilter,
  itemMatchesSearchQuery
} from '../../../shared/barrel';

export function createDefaultItemListing(): IItemListing {
  return {
    isLoading: false,
    loadingError: null,
    filters: createDefaultItemFilters(),
    searchQuery: null,
    items: [],
    linkedIds: null
  };
}

function getFilteredItems(itemListing: IItemListing) {
  return itemListing.items
    .filter(item => itemMatchesSearchQuery(item, itemListing.searchQuery))
    .filter(item => itemMatchesUserFilter(item, itemListing.filters))
}

export function getItems(itemListing: IItemListing) {
  return Boolean(itemListing) ?
    getFilteredItems(itemListing).sort(
      (itemA, itemB) => new Date(itemA.dateCreated).getTime() - new Date(itemB.dateCreated).getTime() 
    ).filter(item => item.done != true)
 
    : [];
}

export function getItem(itemListing: IItemListing, id: string) {
  if (Boolean(itemListing)) {
      let items = itemListing.items;
      let item: IItem = null;
      for (var i = 0; i < items.length; i++) {
          if (items[i].id == id) {
            item = items[i];
            item.prevId = "0";
            item.nextId = "0";
            for (var j = +i+1; j < items.length; j++) {
              if (!items[j].done || items[j].done == false) {
                item.nextId = items[j].id;
                break;
              }
            }
            for (var k = +i-1; k >= 0; k--) {              
              if (!items[j].done || items[k].done == false) {
                item.prevId = items[k].id;
                break;
              }
            }
          }
      }
      return item;
  }
  return null;
}
