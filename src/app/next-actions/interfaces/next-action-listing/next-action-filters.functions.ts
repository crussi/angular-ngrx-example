import { INextActionFilters } from './next-action-filters.interface';

export function createDefaultNextActionFilters(): INextActionFilters {
  return {
    userCreated: null,
    favorites: false
  };
 
}
