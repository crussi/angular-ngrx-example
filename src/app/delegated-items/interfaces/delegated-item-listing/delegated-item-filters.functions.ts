import { IItemFilters } from './delegated-item-filters.interface';

export function createDefaultItemFilters(): IItemFilters {
  return {
    userCreated: null,
    favorites: false
  };
 
}
