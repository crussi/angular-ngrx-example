import { ILinkdId } from '../inbox-item';
import { IItem } from '../item';
import { IItemFilters } from '../item-filters';
import { IUserProfileFilters, IUserProfile } from '../user-profile';
import { ILoadable } from '../loadable';

export interface IItemListing extends ILoadable {
  filters: IItemFilters;
  searchQuery: string;
  items: Array<IItem>;
  linkedIds: Array<ILinkdId>
}

