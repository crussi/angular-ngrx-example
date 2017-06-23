import { IListItemListing } from './list-item-listing.interface';
import { IListItem } from '../../../shared/barrel';
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
  console.log('list-item-listing.function getListItems', listItemListing);
  return Boolean(listItemListing) ?
    getFilteredListItems(listItemListing).sort(
      (listItemA, listItemB) => new Date(listItemA.dateEntered).getTime() - new Date(listItemB.dateEntered).getTime() 
    ).filter(listItem => listItem.processed != true)
 
    : [];
}

export function getListItem(listItemListing: IListItemListing, id: string) {
  // return Boolean(listItemListing) ?
  //   listItemListing.listItems.find(listItem => listItem.id === id) :
  //   null;
  if (Boolean(listItemListing)) {
      let listItems = listItemListing.listItems;
      let listItem: IListItem = null;
      for (var i = 0; i < listItems.length; i++) {
          if (listItems[i].id == id) {
            listItem = listItems[i];
            listItem.prevId = "0";
            listItem.nextId = "0";
            for (var j = +i+1; j < listItems.length; j++) {
              //console.log('j',j);
              if (listItems[j].processed == false) {
                listItem.nextId = listItems[j].id;
                break;
              }
            }
            for (var k = +i-1; k >= 0; k--) {              
              //console.log('k', k);
              if (listItems[k].processed == false) {
                listItem.prevId = listItems[k].id;
                break;
              }
            }
            //console.log("getListItem " + i,listItem)
          }
      }
      return listItem;
  }
  return null;
}

export function getNextListItemId(listItemListing: IListItemListing, id: string) {
  if (Boolean(listItemListing)) {
      let listItems = listItemListing.listItems; //.filter(listItem => listItem.processed != true);  
      for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].id == id) {
          //console.log("getNextListItemId found id! look for next id");
          for (var j = +i+1; j < listItems.length; j++) {
            if (listItems[j].processed == false) {
              //console.log("returning next id",listItems[j].id);
              return listItems[j].id;
            }
          }
         //console.log("looking for next from start");
         for (var k = 0; k < +i; k++) {
           if (listItems[k].processed == false) {
             //console.log("returning next id",listItems[k].id);
             return listItems[k].id;
           }
         }                    
        }
      }
      return null;
  }
}
// export function getNextListItem(listItemListing: IListItemListing, id: string) {
//   if (Boolean(listItemListing)) {
//      let listItems = listItemListing.listItems; //.filter(listItem => listItem.processed != true);  
//      console.log("getNextListItem id",id);
//      console.log("listItems", listItems);
//      for (let i in listItems) {
//        console.log("i",i);
//        console.log("listItems[i].id", listItems[i].id);
//        if (listItems[i].id == id) {
//          console.log("matched id looking for next");
//          for (var j = +i+1; j < listItems.length; j++) {
//            if (listItems[j].processed == false) {
//              return listItems[j];
//            }
//          }
//          console.log("looking for next from start");
//          for (var k = 0; k < +i; k++) {
//            if (listItems[k].processed == false) {
//              return listItems[k];
//            }
//          }
         

//         //  if (+i < listItems.length-1) {
//         //    console.log("found next");
//         //    return listItems[i+1];
//         //  } else {
//         //    console.log("eol ... looking for alt");
//         //    for (let j in listItems) {
//         //      if (listItems[j].id != id) {
//         //        return listItems[j];
//         //      }
//         //    }
//         //  }
//        }
//      }
//      console.log("returning null");
//      return null;
//   }
// }

// export function getNextListItem(listItemListing: IListItemListing, id: string) {
//   if (Boolean(listItemListing)) {
//     let listItems = listItemListing.listItems.filter(listItem => listItem.processed != true);
//     let ids = listItemListing.linkedIds;
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
//       for (let item of listItems) {
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

  // return Boolean(listItemListing) ?
  //   listItemListing.listItems.find(listItem => !listItem.processed ) :
  //   null;
// }

//New content is not actual ???
// export function setUpdateProcessed(listItemListing: IListItemListing, id: string) {
//   return Boolean(listItemListing) ?
//     listItemListing.listItems.find(listItem => listItem.processed !== true) :
//     null;
// }