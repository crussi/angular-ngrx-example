import { IUserProfileListing } from './user-profile-listing.interface';
import { IUserProfile } from '../../../shared/barrel';
import { createDefaultUserProfileFilters } from './user-profile-filters.functions';
import {
  userProfileMatchesUserFilter,
  userProfileMatchesSearchQuery
} from '../user-profile';

export function createDefaultUserProfileListing(): IUserProfileListing {
  return {
    isLoading: false,
    loadingError: null,
    filters: createDefaultUserProfileFilters(),
    searchQuery: null,
    userProfiles: []
  };
}

function getFilteredUserProfiles(userProfileListing: IUserProfileListing) {
  return userProfileListing.userProfiles
    .filter(userProfile => userProfileMatchesSearchQuery(userProfile, userProfileListing.searchQuery))
    .filter(userProfile => userProfileMatchesUserFilter(userProfile, userProfileListing.filters))
}

export function getUserProfiles(userProfileListing: IUserProfileListing) {
  return Boolean(userProfileListing) ?
    getFilteredUserProfiles(userProfileListing).sort(
    (userProfileA, userProfileB) => userProfileA.description.localeCompare(userProfileB.description)
    )//.filter(userProfile => userProfile.processed != true)
 
    : [];
}

export function getUsers(userProfileListing: IUserProfileListing) {
  return Boolean(userProfileListing) ?
    getFilteredUserProfiles(userProfileListing).sort(
      (userProfileA, userProfileB) => userProfileA.description.localeCompare(userProfileB.description)
    ).map(userProfile => userProfile.description)

    : [];
}
export function getUserProfile(userProfileListing: IUserProfileListing, id: string) {
  // return Boolean(userProfileListing) ?
  //   userProfileListing.userProfiles.find(userProfile => userProfile.id === id) :
  //   null;
  if (Boolean(userProfileListing)) {
      let userProfiles = userProfileListing.userProfiles;
      let userProfile: IUserProfile = null;
      for (var i = 0; i < userProfiles.length; i++) {
          if (userProfiles[i].id == id) {
            userProfile = userProfiles[i];
            userProfile.prevId = "0";
            userProfile.nextId = "0";
            for (var j = +i+1; j < userProfiles.length; j++) {
              //console.log('j',j);
              if (userProfiles[j].processed == false) {
                userProfile.nextId = userProfiles[j].id;
                break;
              }
            }
            for (var k = +i-1; k >= 0; k--) {              
              //console.log('k', k);
              if (userProfiles[k].processed == false) {
                userProfile.prevId = userProfiles[k].id;
                break;
              }
            }
            //console.log("getUserProfile " + i,userProfile)
          }
      }
      return userProfile;
  }
  return null;
}

export function getNextUserProfileId(userProfileListing: IUserProfileListing, id: string) {
  if (Boolean(userProfileListing)) {
      let userProfiles = userProfileListing.userProfiles; //.filter(userProfile => userProfile.processed != true);  
      for (var i = 0; i < userProfiles.length; i++) {
        if (userProfiles[i].id == id) {
          //console.log("getNextUserProfileId found id! look for next id");
          for (var j = +i+1; j < userProfiles.length; j++) {
            if (userProfiles[j].processed == false) {
              //console.log("returning next id",userProfiles[j].id);
              return userProfiles[j].id;
            }
          }
         //console.log("looking for next from start");
         for (var k = 0; k < +i; k++) {
           if (userProfiles[k].processed == false) {
             //console.log("returning next id",userProfiles[k].id);
             return userProfiles[k].id;
           }
         }                    
        }
      }
      return null;
  }
}
// export function getNextUserProfile(userProfileListing: IUserProfileListing, id: string) {
//   if (Boolean(userProfileListing)) {
//      let userProfiles = userProfileListing.userProfiles; //.filter(userProfile => userProfile.processed != true);  
//      console.log("getNextUserProfile id",id);
//      console.log("userProfiles", userProfiles);
//      for (let i in userProfiles) {
//        console.log("i",i);
//        console.log("userProfiles[i].id", userProfiles[i].id);
//        if (userProfiles[i].id == id) {
//          console.log("matched id looking for next");
//          for (var j = +i+1; j < userProfiles.length; j++) {
//            if (userProfiles[j].processed == false) {
//              return userProfiles[j];
//            }
//          }
//          console.log("looking for next from start");
//          for (var k = 0; k < +i; k++) {
//            if (userProfiles[k].processed == false) {
//              return userProfiles[k];
//            }
//          }
         

//         //  if (+i < userProfiles.length-1) {
//         //    console.log("found next");
//         //    return userProfiles[i+1];
//         //  } else {
//         //    console.log("eol ... looking for alt");
//         //    for (let j in userProfiles) {
//         //      if (userProfiles[j].id != id) {
//         //        return userProfiles[j];
//         //      }
//         //    }
//         //  }
//        }
//      }
//      console.log("returning null");
//      return null;
//   }
// }

// export function getNextUserProfile(userProfileListing: IUserProfileListing, id: string) {
//   if (Boolean(userProfileListing)) {
//     let userProfiles = userProfileListing.userProfiles.filter(userProfile => userProfile.processed != true);
//     let ids = userProfileListing.linkedIds;
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
//       for (let item of userProfiles) {
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

  // return Boolean(userProfileListing) ?
  //   userProfileListing.userProfiles.find(userProfile => !userProfile.processed ) :
  //   null;
// }

//New content is not actual ???
// export function setUpdateProcessed(userProfileListing: IUserProfileListing, id: string) {
//   return Boolean(userProfileListing) ?
//     userProfileListing.userProfiles.find(userProfile => userProfile.processed !== true) :
//     null;
// }