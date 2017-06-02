import { IInboxItem } from './inbox-item.interface';
import { IInboxItemFilters } from '../inbox-item-listing';

export function createInboxItem(
  id: string,
  title: string,
  platform?: string,
  description?: string,
  youtubeUrl?: string,
  imageUrl?: string,
  favorite = false,
) {
  return {id, title, platform, description, youtubeUrl, imageUrl, favorite};
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

export function inboxItemMatchesPlatformFilter(inboxItem: IInboxItem, filters: IInboxItemFilters) {
  if (!Boolean(inboxItem)) {
    return false;
  }

  return Boolean(filters) && Boolean(filters.platform) ?
    inboxItem.platform === filters.platform :
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
