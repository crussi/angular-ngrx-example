import { INextActionListing } from './next-action-listing.interface';
//import { INextAction } from '../../../shared/barrel';
import { INextAction } from '../../interfaces';
import { createDefaultNextActionFilters } from './next-action-filters.functions';
import {
  nextActionMatchesUserFilter,
  nextActionMatchesSearchQuery
} from '../next-action';

export function createDefaultNextActionListing(): INextActionListing {
  return {
    isLoading: false,
    loadingError: null,
    filters: createDefaultNextActionFilters(),
    searchQuery: null,
    nextActions: [],
    linkedIds: null
  };
}

function getFilteredNextActions(nextActionListing: INextActionListing) {
  return nextActionListing.nextActions
    .filter(nextAction => nextActionMatchesSearchQuery(nextAction, nextActionListing.searchQuery))
    .filter(nextAction => nextActionMatchesUserFilter(nextAction, nextActionListing.filters))
}

export function getNextActions(nextActionListing: INextActionListing) {
  return Boolean(nextActionListing) ?
    getFilteredNextActions(nextActionListing).sort(
      (nextActionA, nextActionB) => new Date(nextActionA.dateCreated).getTime() - new Date(nextActionB.dateCreated).getTime() 
    ) //.filter(nextAction => nextAction.processed != true)
 
    : [];
}

export function getNextAction(nextActionListing: INextActionListing, id: string) {
  // return Boolean(nextActionListing) ?
  //   nextActionListing.nextActions.find(nextAction => nextAction.id === id) :
  //   null;
  if (Boolean(nextActionListing)) {
      let nextActions = nextActionListing.nextActions;
      let nextAction: INextAction = null;
      for (var i = 0; i < nextActions.length; i++) {
          if (nextActions[i].id == id) {
            nextAction = nextActions[i];
            nextAction.prevId = "0";
            nextAction.nextId = "0";
            for (var j = +i+1; j < nextActions.length; j++) {
              //console.log('j',j);
              if (nextActions[j].processed == false) {
                nextAction.nextId = nextActions[j].id;
                break;
              }
            }
            for (var k = +i-1; k >= 0; k--) {              
              //console.log('k', k);
              if (nextActions[k].processed == false) {
                nextAction.prevId = nextActions[k].id;
                break;
              }
            }
            //console.log("getNextAction " + i,nextAction)
          }
      }
      return nextAction;
  }
  return null;
}

export function getNextNextActionId(nextActionListing: INextActionListing, id: string) {
  if (Boolean(nextActionListing)) {
      let nextActions = nextActionListing.nextActions; //.filter(nextAction => nextAction.processed != true);  
      for (var i = 0; i < nextActions.length; i++) {
        if (nextActions[i].id == id) {
          //console.log("getNextNextActionId found id! look for next id");
          for (var j = +i+1; j < nextActions.length; j++) {
            if (nextActions[j].processed == false) {
              //console.log("returning next id",nextActions[j].id);
              return nextActions[j].id;
            }
          }
         //console.log("looking for next from start");
         for (var k = 0; k < +i; k++) {
           if (nextActions[k].processed == false) {
             //console.log("returning next id",nextActions[k].id);
             return nextActions[k].id;
           }
         }                    
        }
      }
      return null;
  }
}
// export function getNextNextAction(nextActionListing: INextActionListing, id: string) {
//   if (Boolean(nextActionListing)) {
//      let nextActions = nextActionListing.nextActions; //.filter(nextAction => nextAction.processed != true);  
//      console.log("getNextNextAction id",id);
//      console.log("nextActions", nextActions);
//      for (let i in nextActions) {
//        console.log("i",i);
//        console.log("nextActions[i].id", nextActions[i].id);
//        if (nextActions[i].id == id) {
//          console.log("matched id looking for next");
//          for (var j = +i+1; j < nextActions.length; j++) {
//            if (nextActions[j].processed == false) {
//              return nextActions[j];
//            }
//          }
//          console.log("looking for next from start");
//          for (var k = 0; k < +i; k++) {
//            if (nextActions[k].processed == false) {
//              return nextActions[k];
//            }
//          }
         

//         //  if (+i < nextActions.length-1) {
//         //    console.log("found next");
//         //    return nextActions[i+1];
//         //  } else {
//         //    console.log("eol ... looking for alt");
//         //    for (let j in nextActions) {
//         //      if (nextActions[j].id != id) {
//         //        return nextActions[j];
//         //      }
//         //    }
//         //  }
//        }
//      }
//      console.log("returning null");
//      return null;
//   }
// }

// export function getNextNextAction(nextActionListing: INextActionListing, id: string) {
//   if (Boolean(nextActionListing)) {
//     let nextActions = nextActionListing.nextActions.filter(nextAction => nextAction.processed != true);
//     let ids = nextActionListing.linkedIds;
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
//       for (let item of nextActions) {
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

  // return Boolean(nextActionListing) ?
  //   nextActionListing.nextActions.find(nextAction => !nextAction.processed ) :
  //   null;
// }

//New content is not actual ???
// export function setUpdateProcessed(nextActionListing: INextActionListing, id: string) {
//   return Boolean(nextActionListing) ?
//     nextActionListing.nextActions.find(nextAction => nextAction.processed !== true) :
//     null;
// }