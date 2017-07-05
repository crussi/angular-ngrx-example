import { INextAction } from '../../../shared/barrel';
import { INextActionFilters } from '../next-action-listing';

export function createNextAction(
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

export function nextActionMatchesSearchQuery(nextAction: INextAction, searchQuery: string) {
  if (!Boolean(nextAction)) {
    return false;
  }

  return Boolean(searchQuery) ?
    textMatchesSearchQuery(nextAction.title, searchQuery) ||
    textMatchesSearchQuery(nextAction.description, searchQuery) :
    true;
}

export function nextActionMatchesUserFilter(nextAction: INextAction, filters: INextActionFilters) {
  if (!Boolean(nextAction)) {
    return false;
  }

return Boolean(filters) && Boolean(filters.user) ?
    nextAction.user === filters.user :
    true;
}

// export function nextActionMatchesFavoritesFilter(nextAction: INextAction, filters: INextActionFilters) {
//   if (!Boolean(nextAction)) {
//     return false;
//   }

//   return Boolean(filters) && filters.favorites === true ?
//     nextAction.favorite :
//     true;
// }
