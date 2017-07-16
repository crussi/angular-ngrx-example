import { IUserProfile, IUserProfileListing } from '../';
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
    (userProfileA, userProfileB) => userProfileA.name.localeCompare(userProfileB.name)
    )//.filter(userProfile => userProfile.processed != true)
 
    : [];
}

export function getUsers(userProfileListing: IUserProfileListing) {
  return Boolean(userProfileListing) ?
    getFilteredUserProfiles(userProfileListing).sort(
      (userProfileA, userProfileB) => userProfileA.name.localeCompare(userProfileB.name)
    ).map(userProfile => userProfile.name)

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
              //if (userProfiles[j].processed == false) {
                userProfile.nextId = userProfiles[j].id;
                break;
              //}
            }
            for (var k = +i-1; k >= 0; k--) {              
              //console.log('k', k);
              //if (userProfiles[k].processed == false) {
                userProfile.prevId = userProfiles[k].id;
                break;
              //}
            }
            //console.log("getUserProfile " + i,userProfile)
          }
      }
      return userProfile;
  }
  return null;
}

