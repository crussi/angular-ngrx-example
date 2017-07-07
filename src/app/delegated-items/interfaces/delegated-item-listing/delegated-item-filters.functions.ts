import { IDelegatedItemFilters } from './delegated-item-filters.interface';

export function createDefaultDelegatedItemFilters(): IDelegatedItemFilters {
  return {
    userCreated: null,
    favorites: false
  };
 
}
