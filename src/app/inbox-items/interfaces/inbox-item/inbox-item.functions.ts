//import { IInboxItem } from './inbox-item.interface';
import { IInboxItem } from '../../../shared/barrel';
import { IInboxItemFilters } from '../inbox-item-listing';

export function createInboxItem(
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

export function inboxItemMatchesSearchQuery(inboxItem: IInboxItem, searchQuery: string) {
  if (!Boolean(inboxItem)) {
    return false;
  }

  return Boolean(searchQuery) ?
    textMatchesSearchQuery(inboxItem.title, searchQuery) ||
    textMatchesSearchQuery(inboxItem.description, searchQuery) :
    true;
}

export function inboxItemMatchesUserFilter(inboxItem: IInboxItem, filters: IInboxItemFilters) {
  if (!Boolean(inboxItem)) {
    return false;
  }

  return Boolean(filters) && Boolean(filters.user) ?
    inboxItem.user === filters.user :
    true;
}

export function inboxItemMatchesFavoritesFilter(inboxItem: IInboxItem, filters: IInboxItemFilters) {
  if (!Boolean(inboxItem)) {
    return false;
  }

  return Boolean(filters) && filters.favorites === true ?
    inboxItem.favorite :
    true;
}
