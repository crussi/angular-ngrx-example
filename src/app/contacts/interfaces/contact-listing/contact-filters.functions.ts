import { IContactFilters } from './contact-filters.interface';

export function createDefaultContactFilters(): IContactFilters {
  return {
    user: null
  };
 
}
