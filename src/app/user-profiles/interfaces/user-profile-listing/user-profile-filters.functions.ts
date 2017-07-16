import { IUserProfileFilters } from './user-profile-filters.interface';

export function createDefaultUserProfileFilters(): IUserProfileFilters {
  return {
    user: null
  };
 
}
