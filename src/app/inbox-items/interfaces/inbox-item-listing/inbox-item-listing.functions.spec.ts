import { createInboxItem } from '../inbox-item';
import { IInboxItemListing } from './inbox-item-listing.interface';
import {
  createDefaultInboxItemListing,
  getInboxItem,
  getInboxItems
} from './inbox-item-listing.functions';
import { createDefaultInboxItemFilters } from './inbox-item-filters.functions';

describe('when there is a list of 3 unsorted video games', () => {
  const unsortedInboxItemListing: IInboxItemListing = {
    ...createDefaultInboxItemListing(),
    inboxItems: [
      createInboxItem('1', 'Super Mario'),
      createInboxItem('2', 'Legend of Zelda'),
      createInboxItem('3', 'Metroid'),
    ]
  };

  describe('getInboxItems(unsortedInboxItemListing)', () => {
    it('returns a list of containing 3 elements', () => {
      const inboxItems = getInboxItems(unsortedInboxItemListing);
      expect(inboxItems.length).toEqual(3);
    });

    it('returns a list that is sorted by title', () => {
      const inboxItems = getInboxItems(unsortedInboxItemListing);
      expect(inboxItems[0].id).toEqual('2');
      expect(inboxItems[1].id).toEqual('3');
      expect(inboxItems[2].id).toEqual('1');
    });
  });

  describe('getInboxItem(unsortedInboxItemListing, "1")', () => {
    it('should get the matched video game via its id', () => {
      const inboxItem = getInboxItem(unsortedInboxItemListing, '1');
      expect(inboxItem).toEqual(unsortedInboxItemListing.inboxItems[0]);
    });
  });

  describe('getInboxItem(unsortedInboxItemListing, falsy)', () => {
    it('returns falsy', () => {
      const inboxItem = getInboxItem(unsortedInboxItemListing, null);
      expect(inboxItem).toBeFalsy();
    });
  });
});

describe('when there is a list of games from different platforms', () => {
  const inboxItemListing: IInboxItemListing = {
    ...createDefaultInboxItemListing(),
    inboxItems: [
      createInboxItem('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createInboxItem('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultInboxItemFilters(),
      platform: 'PC'
    }
  };

  it('should return a list that matches the specified platform only', () => {
    const inboxItems = getInboxItems(inboxItemListing);
    expect(inboxItems.length).toEqual(1);
    expect(inboxItems[0].id).toEqual('2');
  });
});

describe('when there is a list of games from different platforms', () => {
  const inboxItemListing: IInboxItemListing = {
    ...createDefaultInboxItemListing(),
    inboxItems: [
      createInboxItem('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createInboxItem('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultInboxItemFilters(),
      platform: 'PC'
    }
  };

  it('should return a list that matches the specified platform only', () => {
    const inboxItems = getInboxItems(inboxItemListing);
    expect(inboxItems.length).toEqual(1);
    expect(inboxItems[0].id).toEqual('2');
  });
});

describe('when there is a list of games with a search query', () => {
  const inboxItemListing: IInboxItemListing = {
    ...createDefaultInboxItemListing(),
    inboxItems: [
      createInboxItem('1', 'Super Mario Odyssey'),
      createInboxItem('2', 'Pillars of Eternity')
    ],
    searchQuery: 'Sup'
  };

  it('should return a list that includes the searchQuery string', () => {
    const inboxItems = getInboxItems(inboxItemListing);
    expect(inboxItems.length).toEqual(1);
    expect(inboxItems[0].id).toEqual('1');
  });
});

describe('when the list is falsy', () => {
  describe('getInboxItem(falsy, "1")', () => {
    it('returns falsy', () => {
      const inboxItem = getInboxItem(null, '1');
      expect(inboxItem).toBeFalsy();
    });
  });

  describe('getInboxItems(falsy)', () => {
    it('returns an empty list', () => {
      const inboxItem = getInboxItems(null);
      expect(inboxItem).toEqual([]);
    });
  });
});
