import { createDelegatedItem } from '../delegated-item';
import { IDelegatedItemListing } from './delegated-item-listing.interface';
import {
  createDefaultDelegatedItemListing,
  getDelegatedItem,
  getDelegatedItems
} from './delegated-item-listing.functions';
import { createDefaultDelegatedItemFilters } from './delegated-item-filters.functions';

describe('when there is a list of 3 unsorted video games', () => {
  const unsortedDelegatedItemListing: IDelegatedItemListing = {
    ...createDefaultDelegatedItemListing(),
    delegatedItems: [
      createDelegatedItem('1', 'Super Mario'),
      createDelegatedItem('2', 'Legend of Zelda'),
      createDelegatedItem('3', 'Metroid'),
    ]
  };

  describe('getDelegatedItems(unsortedDelegatedItemListing)', () => {
    it('returns a list of containing 3 elements', () => {
      const delegatedItems = getDelegatedItems(unsortedDelegatedItemListing);
      expect(delegatedItems.length).toEqual(3);
    });

    it('returns a list that is sorted by title', () => {
      const delegatedItems = getDelegatedItems(unsortedDelegatedItemListing);
      expect(delegatedItems[0].id).toEqual('2');
      expect(delegatedItems[1].id).toEqual('3');
      expect(delegatedItems[2].id).toEqual('1');
    });
  });

  describe('getDelegatedItem(unsortedDelegatedItemListing, "1")', () => {
    it('should get the matched video game via its id', () => {
      const delegatedItem = getDelegatedItem(unsortedDelegatedItemListing, '1');
      expect(delegatedItem).toEqual(unsortedDelegatedItemListing.delegatedItems[0]);
    });
  });

  describe('getDelegatedItem(unsortedDelegatedItemListing, falsy)', () => {
    it('returns falsy', () => {
      const delegatedItem = getDelegatedItem(unsortedDelegatedItemListing, null);
      expect(delegatedItem).toBeFalsy();
    });
  });
});

describe('when there is a list of games from different users', () => {
  const delegatedItemListing: IDelegatedItemListing = {
    ...createDefaultDelegatedItemListing(),
    delegatedItems: [
      createDelegatedItem('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createDelegatedItem('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultDelegatedItemFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const delegatedItems = getDelegatedItems(delegatedItemListing);
    expect(delegatedItems.length).toEqual(1);
    expect(delegatedItems[0].id).toEqual('2');
  });
});

describe('when there is a list of games from different users', () => {
  const delegatedItemListing: IDelegatedItemListing = {
    ...createDefaultDelegatedItemListing(),
    delegatedItems: [
      createDelegatedItem('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createDelegatedItem('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultDelegatedItemFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const delegatedItems = getDelegatedItems(delegatedItemListing);
    expect(delegatedItems.length).toEqual(1);
    expect(delegatedItems[0].id).toEqual('2');
  });
});

describe('when there is a list of games with a search query', () => {
  const delegatedItemListing: IDelegatedItemListing = {
    ...createDefaultDelegatedItemListing(),
    delegatedItems: [
      createDelegatedItem('1', 'Super Mario Odyssey'),
      createDelegatedItem('2', 'Pillars of Eternity')
    ],
    searchQuery: 'Sup'
  };

  it('should return a list that includes the searchQuery string', () => {
    const delegatedItems = getDelegatedItems(delegatedItemListing);
    expect(delegatedItems.length).toEqual(1);
    expect(delegatedItems[0].id).toEqual('1');
  });
});

describe('when the list is falsy', () => {
  describe('getDelegatedItem(falsy, "1")', () => {
    it('returns falsy', () => {
      const delegatedItem = getDelegatedItem(null, '1');
      expect(delegatedItem).toBeFalsy();
    });
  });

  describe('getDelegatedItems(falsy)', () => {
    it('returns an empty list', () => {
      const delegatedItem = getDelegatedItems(null);
      expect(delegatedItem).toEqual([]);
    });
  });
});
