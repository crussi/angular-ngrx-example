import { createContact } from '../contact';
import { IContactListing } from './contact-listing.interface';
import {
  createDefaultContactListing,
  getContact,
  getContacts
} from './contact-listing.functions';
import { createDefaultContactFilters } from './contact-filters.functions';

describe('when there is a list of 3 unsorted video games', () => {
  const unsortedContactListing: IContactListing = {
    ...createDefaultContactListing(),
    contacts: [
      createContact('1', 'Super Mario'),
      createContact('2', 'Legend of Zelda'),
      createContact('3', 'Metroid'),
    ]
  };

  describe('getContacts(unsortedContactListing)', () => {
    it('returns a list of containing 3 elements', () => {
      const contacts = getContacts(unsortedContactListing);
      expect(contacts.length).toEqual(3);
    });

    it('returns a list that is sorted by title', () => {
      const contacts = getContacts(unsortedContactListing);
      expect(contacts[0].id).toEqual('2');
      expect(contacts[1].id).toEqual('3');
      expect(contacts[2].id).toEqual('1');
    });
  });

  describe('getContact(unsortedContactListing, "1")', () => {
    it('should get the matched video game via its id', () => {
      const contact = getContact(unsortedContactListing, '1');
      expect(contact).toEqual(unsortedContactListing.contacts[0]);
    });
  });

  describe('getContact(unsortedContactListing, falsy)', () => {
    it('returns falsy', () => {
      const contact = getContact(unsortedContactListing, null);
      expect(contact).toBeFalsy();
    });
  });
});

describe('when there is a list of games from different users', () => {
  const contactListing: IContactListing = {
    ...createDefaultContactListing(),
    contacts: [
      createContact('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createContact('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultContactFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const contacts = getContacts(contactListing);
    expect(contacts.length).toEqual(1);
    expect(contacts[0].id).toEqual('2');
  });
});

describe('when there is a list of games from different users', () => {
  const contactListing: IContactListing = {
    ...createDefaultContactListing(),
    contacts: [
      createContact('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createContact('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultContactFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const contacts = getContacts(contactListing);
    expect(contacts.length).toEqual(1);
    expect(contacts[0].id).toEqual('2');
  });
});

describe('when there is a list of games with a search query', () => {
  const contactListing: IContactListing = {
    ...createDefaultContactListing(),
    contacts: [
      createContact('1', 'Super Mario Odyssey'),
      createContact('2', 'Pillars of Eternity')
    ],
    searchQuery: 'Sup'
  };

  it('should return a list that includes the searchQuery string', () => {
    const contacts = getContacts(contactListing);
    expect(contacts.length).toEqual(1);
    expect(contacts[0].id).toEqual('1');
  });
});

describe('when the list is falsy', () => {
  describe('getContact(falsy, "1")', () => {
    it('returns falsy', () => {
      const contact = getContact(null, '1');
      expect(contact).toBeFalsy();
    });
  });

  describe('getContacts(falsy)', () => {
    it('returns an empty list', () => {
      const contact = getContacts(null);
      expect(contact).toEqual([]);
    });
  });
});
