import { IContact, IContactFilters } from '../../../contacts/interfaces';

export function createContact(
  id: string,
  user?: string,
  name?: string
) {
  return {id, user, name};
}

function textMatchesSearchQuery(text: string, searchQuery: string) {
  return text ?
    text.toLowerCase().includes(searchQuery.toLowerCase()) :
    false;
}

export function contactMatchesSearchQuery(contact: IContact, searchQuery: string) {
  if (!Boolean(contact)) {
    return false;
  }

  return Boolean(searchQuery) ?
    textMatchesSearchQuery(contact.name, searchQuery) : true;
}

export function contactMatchesUserFilter(contact: IContact, filters: IContactFilters) {
  if (!Boolean(contact)) {
    return false;
  }

return Boolean(filters) && Boolean(filters.user) ?
    contact.user === filters.user :
    true;
}
