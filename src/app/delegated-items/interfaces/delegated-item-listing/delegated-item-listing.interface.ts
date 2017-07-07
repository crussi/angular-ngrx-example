//import { IDelegatedItem } from '../delegated-item/delegated-item.interface';
import { ILinkdId } from '../../../shared/barrel';
import { IDelegatedItem } from '../../interfaces';
import { IDelegatedItemFilters } from './delegated-item-filters.interface';
import { ILoadable } from '../../../loading/interfaces/loadable/loadable';

export interface IDelegatedItemListing extends ILoadable {
  filters: IDelegatedItemFilters;
  searchQuery: string;
  delegatedItems: Array<IDelegatedItem>;
  linkedIds: Array<ILinkdId>
}

