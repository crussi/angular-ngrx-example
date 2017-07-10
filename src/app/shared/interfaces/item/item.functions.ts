import { IItem } from './item.interface';
import { IItemFilters } from '../item-filters/item-filters.interface';

export function createItem(
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

export function itemMatchesSearchQuery(item: IItem, searchQuery: string) {
  if (!Boolean(item)) {
    return false;
  }

return Boolean(searchQuery) ?
    textMatchesSearchQuery(item.nextaction, searchQuery) :
    true;
}

export function itemMatchesUserFilter(item: IItem, filters: IItemFilters) {
  if (!Boolean(item)) {
    return false;
  }

return Boolean(filters) && Boolean(filters.userCreated) ?
    item.userCreated === filters.userCreated :
    true;
}