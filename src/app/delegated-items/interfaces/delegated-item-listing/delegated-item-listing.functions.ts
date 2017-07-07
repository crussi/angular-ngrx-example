import { IDelegatedItemListing } from './delegated-item-listing.interface';
//import { IDelegatedItem } from '../../../shared/barrel';
import { IDelegatedItem } from '../../interfaces';
import { createDefaultDelegatedItemFilters } from './delegated-item-filters.functions';
import {
  delegatedItemMatchesUserFilter,
  delegatedItemMatchesSearchQuery
} from '../delegated-item';

export function createDefaultDelegatedItemListing(): IDelegatedItemListing {
  return {
    isLoading: false,
    loadingError: null,
    filters: createDefaultDelegatedItemFilters(),
    searchQuery: null,
    delegatedItems: [],
    linkedIds: null
  };
}

function getFilteredDelegatedItems(delegatedItemListing: IDelegatedItemListing) {
  return delegatedItemListing.delegatedItems
    .filter(delegatedItem => delegatedItemMatchesSearchQuery(delegatedItem, delegatedItemListing.searchQuery))
    .filter(delegatedItem => delegatedItemMatchesUserFilter(delegatedItem, delegatedItemListing.filters))
}

export function getDelegatedItems(delegatedItemListing: IDelegatedItemListing) {
  return Boolean(delegatedItemListing) ?
    getFilteredDelegatedItems(delegatedItemListing).sort(
      (delegatedItemA, delegatedItemB) => new Date(delegatedItemA.dateCreated).getTime() - new Date(delegatedItemB.dateCreated).getTime() 
    ) //.filter(delegatedItem => delegatedItem.processed != true)
 
    : [];
}

export function getDelegatedItem(delegatedItemListing: IDelegatedItemListing, id: string) {
  // return Boolean(delegatedItemListing) ?
  //   delegatedItemListing.delegatedItems.find(delegatedItem => delegatedItem.id === id) :
  //   null;
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

export function getNextDelegatedItemId(delegatedItemListing: IDelegatedItemListing, id: string) {
  if (Boolean(delegatedItemListing)) {
      let delegatedItems = delegatedItemListing.delegatedItems; //.filter(delegatedItem => delegatedItem.processed != true);  
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
// export function getNextDelegatedItem(delegatedItemListing: IDelegatedItemListing, id: string) {
//   if (Boolean(delegatedItemListing)) {
//      let delegatedItems = delegatedItemListing.delegatedItems; //.filter(delegatedItem => delegatedItem.processed != true);  
//      console.log("getNextDelegatedItem id",id);
//      console.log("delegatedItems", delegatedItems);
//      for (let i in delegatedItems) {
//        console.log("i",i);
//        console.log("delegatedItems[i].id", delegatedItems[i].id);
//        if (delegatedItems[i].id == id) {
//          console.log("matched id looking for next");
//          for (var j = +i+1; j < delegatedItems.length; j++) {
//            if (delegatedItems[j].processed == false) {
//              return delegatedItems[j];
//            }
//          }
//          console.log("looking for next from start");
//          for (var k = 0; k < +i; k++) {
//            if (delegatedItems[k].processed == false) {
//              return delegatedItems[k];
//            }
//          }
         

//         //  if (+i < delegatedItems.length-1) {
//         //    console.log("found next");
//         //    return delegatedItems[i+1];
//         //  } else {
//         //    console.log("eol ... looking for alt");
//         //    for (let j in delegatedItems) {
//         //      if (delegatedItems[j].id != id) {
//         //        return delegatedItems[j];
//         //      }
//         //    }
//         //  }
//        }
//      }
//      console.log("returning null");
//      return null;
//   }
// }

// export function getNextDelegatedItem(delegatedItemListing: IDelegatedItemListing, id: string) {
//   if (Boolean(delegatedItemListing)) {
//     let delegatedItems = delegatedItemListing.delegatedItems.filter(delegatedItem => delegatedItem.processed != true);
//     let ids = delegatedItemListing.linkedIds;
//     const idIndex: string = "0";
//     const nextIndex: string = "2";
//     let nextId = "0";
//     console.log("id:",id);
//     for (let i in ids) {
//       if (ids[i][idIndex] == id) {
//           nextId = ids[i][nextIndex];
//           console.log("id match nextId:",nextId);
//           if (nextId == "0") {
//             console.log("nextId == 0");
//             for (let j in ids) {
//               console.log("j:",j);
//               if (ids[j][nextIndex] != "0") {
//                 nextId = ids[j][nextIndex];
//                 console.log("next id is alt");
//                 break;
//               }
//             }
//           }
//           console.log("found next id",nextId);
//           break;
//         }
//     }
//     console.log("did i get here?");
//     if (nextId != "0") {
//       for (let item of delegatedItems) {
//         //console.log("item:",item);
//         //console.log("item.id",item.id);
//         //console.log("nextId",nextId)
//         if (item.id == nextId) {
//           console.log("returning item",item);
//           return item;
//         }
//       }
//     }
//     console.log("returning null");
//     return null;
//   } else {
//     return null;
//   }

  // return Boolean(delegatedItemListing) ?
  //   delegatedItemListing.delegatedItems.find(delegatedItem => !delegatedItem.processed ) :
  //   null;
// }

//New content is not actual ???
// export function setUpdateProcessed(delegatedItemListing: IDelegatedItemListing, id: string) {
//   return Boolean(delegatedItemListing) ?
//     delegatedItemListing.delegatedItems.find(delegatedItem => delegatedItem.processed !== true) :
//     null;
// }