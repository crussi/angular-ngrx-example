import { IDelegatedItem } from '../../interfaces';
//import { IItemFilters } from '../item-listing';
import { IItemFilters } from '../../../shared/barrel';

export function createDelegatedItem(
  id: string,
  userCreated?: string,
  nextaction?: string,
  description?: string,
) {
  return { id, userCreated, nextaction, description};
}

function textMatchesSearchQuery(text: string, searchQuery: string) {
  return text ?
    text.toLowerCase().includes(searchQuery.toLowerCase()) :
    false;
}

export function delegatedItemMatchesSearchQuery(delegatedItem: IDelegatedItem, searchQuery: string) {
  if (!Boolean(delegatedItem)) {
    return false;
  }

return Boolean(searchQuery) ?
    textMatchesSearchQuery(delegatedItem.nextaction, searchQuery) :
    true;
}

export function delegatedItemMatchesUserFilter(delegatedItem: IDelegatedItem, filters: IItemFilters) {
  if (!Boolean(delegatedItem)) {
    return false;
  }

return Boolean(filters) && Boolean(filters.userCreated) ?
    delegatedItem.userCreated === filters.userCreated :
    true;
}