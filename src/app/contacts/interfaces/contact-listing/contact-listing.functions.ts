import { IContact, IContactListing } from '../';
import { createDefaultContactFilters } from './contact-filters.functions';
import {
  contactMatchesUserFilter,
  contactMatchesSearchQuery
} from '../contact';

export function createDefaultContactListing(): IContactListing {
  return {
    isLoading: false,
    loadingError: null,
    filters: createDefaultContactFilters(),
    searchQuery: null,
    contacts: []
  };
}

function getFilteredContacts(contactListing: IContactListing) {
  return contactListing.contacts
    .filter(contact => contactMatchesSearchQuery(contact, contactListing.searchQuery))
    .filter(contact => contactMatchesUserFilter(contact, contactListing.filters))
}

export function getContacts(contactListing: IContactListing) {
  return Boolean(contactListing) ?
    getFilteredContacts(contactListing).sort(
    (contactA, contactB) => contactA.name.localeCompare(contactB.name)
    )//.filter(contact => contact.processed != true)
 
    : [];
}

export function getUsers(contactListing: IContactListing) {
  return Boolean(contactListing) ?
    getFilteredContacts(contactListing).sort(
      (contactA, contactB) => contactA.name.localeCompare(contactB.name)
    ).map(contact => contact.name)

    : [];
}
export function getContact(contactListing: IContactListing, id: string) {
  // return Boolean(contactListing) ?
  //   contactListing.contacts.find(contact => contact.id === id) :
  //   null;
  if (Boolean(contactListing)) {
      let contacts = contactListing.contacts;
      let contact: IContact = null;
      for (var i = 0; i < contacts.length; i++) {
          if (contacts[i].id == id) {
            contact = contacts[i];
            contact.prevId = "0";
            contact.nextId = "0";
            for (var j = +i+1; j < contacts.length; j++) {
              //console.log('j',j);
              //if (contacts[j].processed == false) {
                contact.nextId = contacts[j].id;
                break;
              //}
            }
            for (var k = +i-1; k >= 0; k--) {              
              //console.log('k', k);
              //if (contacts[k].processed == false) {
                contact.prevId = contacts[k].id;
                break;
              //}
            }
            //console.log("getContact " + i,contact)
          }
      }
      return contact;
  }
  return null;
}

