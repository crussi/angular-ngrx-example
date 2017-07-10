import { IItemListing } from './item-listing.interface';
//import { IDelegatedItem } from '../../interfaces';
import { IItem } from '../item';
//import { createDefaultItemFilters } from './item-filters.functions';
import { createDefaultItemFilters } from '../item-filters';
// import {
//   delegatedItemMatchesUserFilter,
//   delegatedItemMatchesSearchQuery
// } from '../item';
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

function getFilteredItems(delegatedItemListing: IItemListing) {
  return delegatedItemListing.items
    .filter(delegatedItem => itemMatchesSearchQuery(delegatedItem, delegatedItemListing.searchQuery))
    .filter(delegatedItem => itemMatchesUserFilter(delegatedItem, delegatedItemListing.filters))
}

export function getItems(delegatedItemListing: IItemListing) {
  return Boolean(delegatedItemListing) ?
    getFilteredItems(delegatedItemListing).sort(
      (delegatedItemA, delegatedItemB) => new Date(delegatedItemA.dateCreated).getTime() - new Date(delegatedItemB.dateCreated).getTime() 
    ) //.filter(delegatedItem => delegatedItem.processed != true)
 
    : [];
}

export function getItem(itemListing: IItemListing, id: string) {
  console.log('function getItem ... delegatedItemListing', itemListing);
  if (Boolean(itemListing)) {
    console.log('function getItem ... start');
      let delegatedItems = itemListing.items;
      let item: IItem = null;
      for (var i = 0; i < delegatedItems.length; i++) {
        console.log('function getItem ... for',i);
          if (delegatedItems[i].id == id) {
            item = delegatedItems[i];
            item.prevId = "0";
            item.nextId = "0";
            for (var j = +i+1; j < delegatedItems.length; j++) {
              //console.log('j',j);
              if (delegatedItems[j].processed == false) {
                item.nextId = delegatedItems[j].id;
                break;
              }
            }
            for (var k = +i-1; k >= 0; k--) {              
              //console.log('k', k);
              if (delegatedItems[k].processed == false) {
                item.prevId = delegatedItems[k].id;
                break;
              }
            }
            //console.log("getDelegatedItem " + i,delegatedItem)
          }
      }
      return item;
  }
  return null;
}

export function getNextItemId(itemListing: IItemListing, id: string) {
  if (Boolean(itemListing)) {
      let items = itemListing.items; //.filter(delegatedItem => delegatedItem.processed != true);  
      for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) {
          //console.log("getNextDelegatedItemId found id! look for next id");
          for (var j = +i+1; j < items.length; j++) {
            if (items[j].processed == false) {
              //console.log("returning next id",delegatedItems[j].id);
              return items[j].id;
            }
          }
         //console.log("looking for next from start");
         for (var k = 0; k < +i; k++) {
           if (items[k].processed == false) {
             //console.log("returning next id",delegatedItems[k].id);
             return items[k].id;
           }
         }                    
        }
      }
      return null;
  }
}
