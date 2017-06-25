import { IUserProfile } from '../../../shared/barrel';
import { IUserProfileFilters } from '../user-profile-listing';

export function createUserProfile(
  id: string,
  title: string,
  user?: string,
  description?: string,
  youtubeUrl?: string,
  imageUrl?: string,
  favorite = false,
) {
  return {id, title, user, description, youtubeUrl, imageUrl, favorite};
}

function textMatchesSearchQuery(text: string, searchQuery: string) {
  return text ?
    text.toLowerCase().includes(searchQuery.toLowerCase()) :
    false;
}

export function userProfileMatchesSearchQuery(userProfile: IUserProfile, searchQuery: string) {
  if (!Boolean(userProfile)) {
    return false;
  }

  return Boolean(searchQuery) ?
    textMatchesSearchQuery(userProfile.title, searchQuery) ||
    textMatchesSearchQuery(userProfile.description, searchQuery) :
    true;
}

export function userProfileMatchesUserFilter(userProfile: IUserProfile, filters: IUserProfileFilters) {
  if (!Boolean(userProfile)) {
    return false;
  }

return Boolean(filters) && Boolean(filters.user) ?
    userProfile.user === filters.user :
    true;
}

// export function userProfileMatchesFavoritesFilter(userProfile: IUserProfile, filters: IUserProfileFilters) {
//   if (!Boolean(userProfile)) {
//     return false;
//   }

//   return Boolean(filters) && filters.favorites === true ?
//     userProfile.favorite :
//     true;
// }
