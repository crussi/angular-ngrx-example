import { IUserProfile, IUserProfileListing } from '../../shared/barrel';
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

function getFilteredItems(userProfileListing: IUserProfileListing) {
    return userProfileListing.userProfiles
        .filter(userProfile => userProfileMatchesSearchQuery(userProfile, userProfileListing.searchQuery))
        .filter(userProfile => userProfileMatchesUserFilter(userProfile, userProfileListing.filters))
}

export function getItems(userProfileListing: IUserProfileListing) {
    return Boolean(userProfileListing) ?
        getFilteredItems(userProfileListing).sort(
            (userProfileA, userProfileB) => userProfileA.description.localeCompare(userProfileB.description)
        )//.filter(userProfile => userProfile.processed != true)

        : [];
}

export function getUsers(userProfileListing: IUserProfileListing) {
    return Boolean(userProfileListing) ?
        getFilteredItems(userProfileListing).sort(
            (userProfileA, userProfileB) => userProfileA.description.localeCompare(userProfileB.description)
        ).map(userProfile => userProfile.description)

        : [];
}
export function getUserProfile(userProfileListing: IUserProfileListing, id: string) {
    if (Boolean(userProfileListing)) {
        let userProfiles = userProfileListing.userProfiles;
        let userProfile: IUserProfile = null;
        for (var i = 0; i < userProfiles.length; i++) {
            if (userProfiles[i].id == id) {
                userProfile = userProfiles[i];
                userProfile.prevId = "0";
                userProfile.nextId = "0";
                for (var j = +i + 1; j < userProfiles.length; j++) {
                    //console.log('j',j);
                    if (userProfiles[j].processed == false) {
                        userProfile.nextId = userProfiles[j].id;
                        break;
                    }
                }
                for (var k = +i - 1; k >= 0; k--) {
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
                for (var j = +i + 1; j < userProfiles.length; j++) {
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
