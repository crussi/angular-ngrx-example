import { IListItemFilters } from './list-item-filters.interface';

export function createDefaultListItemFilters(): IListItemFilters {
  return {
    user: null,
    favorites: false
  };
 
}
