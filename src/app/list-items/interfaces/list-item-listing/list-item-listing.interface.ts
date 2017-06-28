import { IListItem } from '../../interfaces';
import { IListItemFilters } from './list-item-filters.interface';
import { ILoadable } from '../../../loading/interfaces/loadable/loadable';

export interface IListItemListing extends ILoadable {
  filters: IListItemFilters;
  searchQuery: string;
  listItems: Array<IListItem>;
  //linkedIds: Array<ILinkdId>
}

