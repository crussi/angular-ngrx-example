//import { INextAction } from '../../../shared/barrel';
import { INextAction } from '../../interfaces';
import { INextActionFilters } from '../next-action-listing';

export function createNextAction(
  id: string,
  //title: string,
  userCreated?: string,
  nextaction?: string,
  description?: string,
  //youtubeUrl?: string,
  //imageUrl?: string,
  //favorite = false,
) {
  return {id, userCreated, nextaction, description};
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

  // return Boolean(searchQuery) ?
  //   textMatchesSearchQuery(nextAction.nextaction, searchQuery) ||
  //   textMatchesSearchQuery(nextAction.description, searchQuery) :
  //   true;
  return Boolean(searchQuery) ?
    textMatchesSearchQuery(nextAction.nextaction, searchQuery) :
    true;

}

export function nextActionMatchesUserFilter(nextAction: INextAction, filters: INextActionFilters) {
  if (!Boolean(nextAction)) {
    return false;
  }

return Boolean(filters) && Boolean(filters.userCreated) ?
    nextAction.userCreated === filters.userCreated :
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
