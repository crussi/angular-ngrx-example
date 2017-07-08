import { IDelegatedItemListing } from './delegated-item-listing.interface';
import { IDelegatedItem } from '../../interfaces';
import { createDefaultItemFilters } from './delegated-item-filters.functions';
import {
  delegatedItemMatchesUserFilter,
  delegatedItemMatchesSearchQuery
} from '../delegated-item';

export function createDefaultItemListing(): IDelegatedItemListing {
  return {
    isLoading: false,
    loadingError: null,
    filters: createDefaultItemFilters(),
    searchQuery: null,
    delegatedItems: [],
    linkedIds: null
  };
}

function getFilteredItems(delegatedItemListing: IDelegatedItemListing) {
  return delegatedItemListing.delegatedItems
    .filter(delegatedItem => delegatedItemMatchesSearchQuery(delegatedItem, delegatedItemListing.searchQuery))
    .filter(delegatedItem => delegatedItemMatchesUserFilter(delegatedItem, delegatedItemListing.filters))
}

export function getItems(delegatedItemListing: IDelegatedItemListing) {
  return Boolean(delegatedItemListing) ?
    getFilteredItems(delegatedItemListing).sort(
      (delegatedItemA, delegatedItemB) => new Date(delegatedItemA.dateCreated).getTime() - new Date(delegatedItemB.dateCreated).getTime() 
    ) //.filter(delegatedItem => delegatedItem.processed != true)
 
    : [];
}

export function getItem(delegatedItemListing: IDelegatedItemListing, id: string) {
  if (Boolean(delegatedItemListing)) {
      let delegatedItems = delegatedItemListing.delegatedItems;
      let delegatedItem: IDelegatedItem = null;
      for (var i = 0; i < delegatedItems.length; i++) {
          if (delegatedItems[i].id == id) {
            delegatedItem = delegatedItems[i];
            delegatedItem.prevId = "0";
            delegatedItem.nextId = "0";
            for (var j = +i+1; j < delegatedItems.length; j++) {
              //console.log('j',j);
              if (delegatedItems[j].processed == false) {
                delegatedItem.nextId = delegatedItems[j].id;
                break;
              }
            }
            for (var k = +i-1; k >= 0; k--) {              
              //console.log('k', k);
              if (delegatedItems[k].processed == false) {
                delegatedItem.prevId = delegatedItems[k].id;
                break;
              }
            }
            //console.log("getDelegatedItem " + i,delegatedItem)
          }
      }
      return delegatedItem;
  }
  return null;
}

export function getNextItemId(itemListing: IDelegatedItemListing, id: string) {
  if (Boolean(itemListing)) {
      let delegatedItems = itemListing.delegatedItems; //.filter(delegatedItem => delegatedItem.processed != true);  
      for (var i = 0; i < delegatedItems.length; i++) {
        if (delegatedItems[i].id == id) {
          //console.log("getNextDelegatedItemId found id! look for next id");
          for (var j = +i+1; j < delegatedItems.length; j++) {
            if (delegatedItems[j].processed == false) {
              //console.log("returning next id",delegatedItems[j].id);
              return delegatedItems[j].id;
            }
          }
         //console.log("looking for next from start");
         for (var k = 0; k < +i; k++) {
           if (delegatedItems[k].processed == false) {
             //console.log("returning next id",delegatedItems[k].id);
             return delegatedItems[k].id;
           }
         }                    
        }
      }
      return null;
  }
}
