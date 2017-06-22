//import { IListItem } from './list-item.interface';
import { IListItem } from '../../../shared/barrel';
import { IListItemFilters } from '../list-item-listing';

export function createListItem(
  id: string,
  title: string,
  user?: string,
  description?: string,
  youtubeUrl?: string,
  imageUrl?: string,
  favorite = false,
) {
  return {id, title, user, description, youtubeUrl, imageUrl, favorite};
}

function textMatchesSearchQuery(text: string, searchQuery: string) {
  return text ?
    text.toLowerCase().includes(searchQuery.toLowerCase()) :
    false;
}

export function listItemMatchesSearchQuery(listItem: IListItem, searchQuery: string) {
  if (!Boolean(listItem)) {
    return false;
  }

  return Boolean(searchQuery) ?
    textMatchesSearchQuery(listItem.title, searchQuery) ||
    textMatchesSearchQuery(listItem.description, searchQuery) :
    true;
}

export function listItemMatchesUserFilter(listItem: IListItem, filters: IListItemFilters) {
  if (!Boolean(listItem)) {
    return false;
  }

return Boolean(filters) && Boolean(filters.user) ?
    listItem.user === filters.user :
    true;
}

// export function listItemMatchesFavoritesFilter(listItem: IListItem, filters: IListItemFilters) {
//   if (!Boolean(listItem)) {
//     return false;
//   }

//   return Boolean(filters) && filters.favorites === true ?
//     listItem.favorite :
//     true;
// }
