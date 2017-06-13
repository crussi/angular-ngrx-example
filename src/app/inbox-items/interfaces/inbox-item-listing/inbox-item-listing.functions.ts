import { IInboxItemListing } from './inbox-item-listing.interface';
import { IInboxItem } from '../../../shared/barrel';
import { createDefaultInboxItemFilters } from './inbox-item-filters.functions';
import {
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
}

export function getInboxItems(inboxItemListing: IInboxItemListing) {
  return Boolean(inboxItemListing) ?
    getFilteredInboxItems(inboxItemListing).sort(
      (inboxItemA, inboxItemB) => new Date(inboxItemA.dateEntered).getTime() - new Date(inboxItemB.dateEntered).getTime() 
    ).filter(inboxItem => inboxItem.processed != true)
 
    : [];
}

export function getInboxItem(inboxItemListing: IInboxItemListing, id: string) {
  // return Boolean(inboxItemListing) ?
  //   inboxItemListing.inboxItems.find(inboxItem => inboxItem.id === id) :
  //   null;
  if (Boolean(inboxItemListing)) {
      let inboxItems = inboxItemListing.inboxItems;
      let inboxItem: IInboxItem = null;
      for (var i = 0; i < inboxItems.length; i++) {
          if (inboxItems[i].id == id) {
            inboxItem = inboxItems[i];
            inboxItem.prevId = "0";
            inboxItem.nextId = "0";
            for (var j = +i+1; j < inboxItems.length; j++) {
              console.log('j',j);
              if (inboxItems[j].processed == false) {
                inboxItem.nextId = inboxItems[j].id;
                break;
              }
            }
            for (var k = +i-1; k >= 0; k--) {              
              console.log('k', k);
              if (inboxItems[k].processed == false) {
                inboxItem.prevId = inboxItems[k].id;
                break;
              }
            }
            //console.log("getInboxItem " + i,inboxItem)
          }
      }
      return inboxItem;
  }
  return null;
}

export function getNextInboxItemId(inboxItemListing: IInboxItemListing, id: string) {
  if (Boolean(inboxItemListing)) {
      let inboxItems = inboxItemListing.inboxItems; //.filter(inboxItem => inboxItem.processed != true);  
      for (var i = 0; i < inboxItems.length; i++) {
        if (inboxItems[i].id == id) {
          console.log("getNextInboxItemId found id! look for next id");
          for (var j = +i+1; j < inboxItems.length; j++) {
            if (inboxItems[j].processed == false) {
              console.log("returning next id",inboxItems[j].id);
              return inboxItems[j].id;
            }
          }
         console.log("looking for next from start");
         for (var k = 0; k < +i; k++) {
           if (inboxItems[k].processed == false) {
             console.log("returning next id",inboxItems[k].id);
             return inboxItems[k].id;
           }
         }                    
        }
      }
      return null;
  }
}
// export function getNextInboxItem(inboxItemListing: IInboxItemListing, id: string) {
//   if (Boolean(inboxItemListing)) {
//      let inboxItems = inboxItemListing.inboxItems; //.filter(inboxItem => inboxItem.processed != true);  
//      console.log("getNextInboxItem id",id);
//      console.log("inboxItems", inboxItems);
//      for (let i in inboxItems) {
//        console.log("i",i);
//        console.log("inboxItems[i].id", inboxItems[i].id);
//        if (inboxItems[i].id == id) {
//          console.log("matched id looking for next");
//          for (var j = +i+1; j < inboxItems.length; j++) {
//            if (inboxItems[j].processed == false) {
//              return inboxItems[j];
//            }
//          }
//          console.log("looking for next from start");
//          for (var k = 0; k < +i; k++) {
//            if (inboxItems[k].processed == false) {
//              return inboxItems[k];
//            }
//          }
         

//         //  if (+i < inboxItems.length-1) {
//         //    console.log("found next");
//         //    return inboxItems[i+1];
//         //  } else {
//         //    console.log("eol ... looking for alt");
//         //    for (let j in inboxItems) {
//         //      if (inboxItems[j].id != id) {
//         //        return inboxItems[j];
//         //      }
//         //    }
//         //  }
//        }
//      }
//      console.log("returning null");
//      return null;
//   }
// }

// export function getNextInboxItem(inboxItemListing: IInboxItemListing, id: string) {
//   if (Boolean(inboxItemListing)) {
//     let inboxItems = inboxItemListing.inboxItems.filter(inboxItem => inboxItem.processed != true);
//     let ids = inboxItemListing.linkedIds;
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
//       for (let item of inboxItems) {
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

  // return Boolean(inboxItemListing) ?
  //   inboxItemListing.inboxItems.find(inboxItem => !inboxItem.processed ) :
  //   null;
// }

//New content is not actual ???
// export function setUpdateProcessed(inboxItemListing: IInboxItemListing, id: string) {
//   return Boolean(inboxItemListing) ?
//     inboxItemListing.inboxItems.find(inboxItem => inboxItem.processed !== true) :
//     null;
// }