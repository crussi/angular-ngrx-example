//import { IInboxItem } from '../inbox-item/inbox-item.interface';
import { IInboxItem, ILinkdId } from '../../../shared/barrel';
import { IInboxItemFilters } from './inbox-item-filters.interface';
import { ILoadable } from '../../../loading/interfaces/loadable/loadable';

export interface IInboxItemListing extends ILoadable {
  filters: IInboxItemFilters;
  searchQuery: string;
  inboxItems: Array<IInboxItem>;
  linkedIds: Array<ILinkdId>
}

