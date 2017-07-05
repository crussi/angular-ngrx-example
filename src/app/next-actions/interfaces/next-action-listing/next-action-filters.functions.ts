import { INextActionFilters } from './next-action-filters.interface';

export function createDefaultNextActionFilters(): INextActionFilters {
  return {
    user: null,
    favorites: false
  };
 
}
