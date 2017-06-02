import { IInboxItemFilters } from './inbox-item-filters.interface';

export function createDefaultInboxItemFilters(): IInboxItemFilters {
  return {
    platform: null,
    favorites: false
  };
 
}
