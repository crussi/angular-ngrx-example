import { ILinkdId } from '../../../shared/barrel';
import { IDelegatedItem } from '../../interfaces';
import { IItemFilters } from './delegated-item-filters.interface';
import { ILoadable } from '../../../loading/interfaces/loadable/loadable';

export interface IDelegatedItemListing extends ILoadable {
  filters: IItemFilters;
  searchQuery: string;
  delegatedItems: Array<IDelegatedItem>;
  linkedIds: Array<ILinkdId>
}

