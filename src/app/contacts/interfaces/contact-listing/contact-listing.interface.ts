import { IContact } from '../contact';
import { ILinkdId } from '../../../shared/barrel';
import { IContactFilters } from './contact-filters.interface';
import { ILoadable } from '../../../shared/barrel';

export interface IContactListing extends ILoadable {
  filters: IContactFilters;
  searchQuery: string;
  contacts: Array<IContact>;
  //linkedIds: Array<ILinkdId>
}

