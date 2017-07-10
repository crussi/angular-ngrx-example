//import { IUserProfile } from '../user-profile/user-profile.interface';
import { IUserProfile, ILinkdId } from '../../../shared/barrel';
import { IUserProfileFilters } from './user-profile-filters.interface';
import { ILoadable } from '../../../shared/barrel';

export interface IUserProfileListing extends ILoadable {
  filters: IUserProfileFilters;
  searchQuery: string;
  userProfiles: Array<IUserProfile>;
  //linkedIds: Array<ILinkdId>
}

