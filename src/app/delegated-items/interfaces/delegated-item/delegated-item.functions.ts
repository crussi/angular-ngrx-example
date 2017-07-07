//import { IDelegatedItem } from '../../../shared/barrel';
import { IDelegatedItem } from '../../interfaces';
import { IDelegatedItemFilters } from '../delegated-item-listing';

export function createDelegatedItem(
  id: string,
  //title: string,
  userCreated?: string,
  delegateditem?: string,
  description?: string,
  //youtubeUrl?: string,
  //imageUrl?: string,
  //favorite = false,
) {
  return {id, userCreated, delegateditem, description};
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

  // return Boolean(searchQuery) ?
  //   textMatchesSearchQuery(delegatedItem.delegateditem, searchQuery) ||
  //   textMatchesSearchQuery(delegatedItem.description, searchQuery) :
  //   true;
  return Boolean(searchQuery) ?
    textMatchesSearchQuery(delegatedItem.delegateditem, searchQuery) :
    true;

}

export function delegatedItemMatchesUserFilter(delegatedItem: IDelegatedItem, filters: IDelegatedItemFilters) {
  if (!Boolean(delegatedItem)) {
    return false;
  }

return Boolean(filters) && Boolean(filters.userCreated) ?
    delegatedItem.userCreated === filters.userCreated :
    true;
}

// export function delegatedItemMatchesFavoritesFilter(delegatedItem: IDelegatedItem, filters: IDelegatedItemFilters) {
//   if (!Boolean(delegatedItem)) {
//     return false;
//   }

//   return Boolean(filters) && filters.favorites === true ?
//     delegatedItem.favorite :
//     true;
// }
