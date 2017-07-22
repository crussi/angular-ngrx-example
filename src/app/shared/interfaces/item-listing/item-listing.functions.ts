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

export function getFilteredItems(itemListing: IItemListing) {
  return itemListing.items
    .filter(item => itemMatchesSearchQuery(item, itemListing.searchQuery))
    .filter(item => itemMatchesUserFilter(item, itemListing.filters))
}

export function getItems(itemListing: IItemListing) {
  return Boolean(itemListing) ?
    getFilteredItems(itemListing).sort(
      (itemA, itemB) => new Date(itemA.dateCreated).getTime() - new Date(itemB.dateCreated).getTime() 
    ).filter(item => item.done != true) //note: item.done == undefined || item.done == false
    : [];
}

export function sortItemsByDateCreated(items: Array<IItem>) {
  return Boolean(items) ?
    items.sort(
      (itemA, itemB) => new Date(itemA.dateCreated).getTime() - new Date(itemB.dateCreated).getTime()
    ).filter(item => item.done != true) //note: item.done == undefined || item.done == false
    : [];
}

export function getItem(itemListing: IItemListing, id: string) {
  if (Boolean(itemListing)) {
      let items = itemListing.items;
      let item: IItem = null;
      let found = false;
      for (var i = 0; i < items.length; i++) {
        if (found) {
          //console.log('complete');
          break;
        }
        //console.log('i',i);
        //console.log('id',id);
        //console.log('items[i].id', items[i].id);
          if (items[i].id == id) {
            found = true;
            item = items[i];
            item.prevId = "0";
            item.nextId = "0";
            //console.log('found match',item);
            for (var j = +i+1; j < items.length; j++) {
              //console.log('j',j);
              //console.log('items[j]', items[j]);
              
              if (items[j].done == undefined || items[j].done == false) {
                item.nextId = items[j].id;
                break;
              }
            }
            for (var k = +i-1; k >= 0; k--) {              
              //console.log('k', k);
              //console.log('items[k]', items[k]);
              if (items[k].done == undefined || items[k].done == false) {
                item.prevId = items[k].id;
                break;
              }
            }
          }
      }
      //console.log('return item',item);
      return item;
  }
  return null;
}
