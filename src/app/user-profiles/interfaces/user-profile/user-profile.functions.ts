import { IUserProfile, IUserProfileFilters } from '../../../user-profiles/interfaces';

export function createUserProfile(
  id: string,
  user?: string,
  name?: string
) {
  return {id, user, name};
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
    textMatchesSearchQuery(userProfile.name, searchQuery) : true;
}

export function userProfileMatchesUserFilter(userProfile: IUserProfile, filters: IUserProfileFilters) {
  if (!Boolean(userProfile)) {
    return false;
  }

return Boolean(filters) && Boolean(filters.user) ?
    userProfile.user === filters.user :
    true;
}
