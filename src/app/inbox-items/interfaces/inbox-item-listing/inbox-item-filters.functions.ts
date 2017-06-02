import { IInboxItemFilters } from './inbox-item-filters.interface';

export function createDefaultInboxItemFilters(): IInboxItemFilters {
  return {
    user: null,
    favorites: false
  };
 
}
