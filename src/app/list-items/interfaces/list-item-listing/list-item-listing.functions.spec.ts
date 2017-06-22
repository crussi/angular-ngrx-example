import { createListItem } from '../list-item';
import { IListItemListing } from './list-item-listing.interface';
import {
  createDefaultListItemListing,
  getListItem,
  getListItems
} from './list-item-listing.functions';
import { createDefaultListItemFilters } from './list-item-filters.functions';

describe('when there is a list of 3 unsorted video games', () => {
  const unsortedListItemListing: IListItemListing = {
    ...createDefaultListItemListing(),
    listItems: [
      createListItem('1', 'Super Mario'),
      createListItem('2', 'Legend of Zelda'),
      createListItem('3', 'Metroid'),
    ]
  };

  describe('getListItems(unsortedListItemListing)', () => {
    it('returns a list of containing 3 elements', () => {
      const listItems = getListItems(unsortedListItemListing);
      expect(listItems.length).toEqual(3);
    });

    it('returns a list that is sorted by title', () => {
      const listItems = getListItems(unsortedListItemListing);
      expect(listItems[0].id).toEqual('2');
      expect(listItems[1].id).toEqual('3');
      expect(listItems[2].id).toEqual('1');
    });
  });

  describe('getListItem(unsortedListItemListing, "1")', () => {
    it('should get the matched video game via its id', () => {
      const listItem = getListItem(unsortedListItemListing, '1');
      expect(listItem).toEqual(unsortedListItemListing.listItems[0]);
    });
  });

  describe('getListItem(unsortedListItemListing, falsy)', () => {
    it('returns falsy', () => {
      const listItem = getListItem(unsortedListItemListing, null);
      expect(listItem).toBeFalsy();
    });
  });
});

describe('when there is a list of games from different users', () => {
  const listItemListing: IListItemListing = {
    ...createDefaultListItemListing(),
    listItems: [
      createListItem('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createListItem('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultListItemFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const listItems = getListItems(listItemListing);
    expect(listItems.length).toEqual(1);
    expect(listItems[0].id).toEqual('2');
  });
});

describe('when there is a list of games from different users', () => {
  const listItemListing: IListItemListing = {
    ...createDefaultListItemListing(),
    listItems: [
      createListItem('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createListItem('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultListItemFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const listItems = getListItems(listItemListing);
    expect(listItems.length).toEqual(1);
    expect(listItems[0].id).toEqual('2');
  });
});

describe('when there is a list of games with a search query', () => {
  const listItemListing: IListItemListing = {
    ...createDefaultListItemListing(),
    listItems: [
      createListItem('1', 'Super Mario Odyssey'),
      createListItem('2', 'Pillars of Eternity')
    ],
    searchQuery: 'Sup'
  };

  it('should return a list that includes the searchQuery string', () => {
    const listItems = getListItems(listItemListing);
    expect(listItems.length).toEqual(1);
    expect(listItems[0].id).toEqual('1');
  });
});

describe('when the list is falsy', () => {
  describe('getListItem(falsy, "1")', () => {
    it('returns falsy', () => {
      const listItem = getListItem(null, '1');
      expect(listItem).toBeFalsy();
    });
  });

  describe('getListItems(falsy)', () => {
    it('returns an empty list', () => {
      const listItem = getListItems(null);
      expect(listItem).toEqual([]);
    });
  });
});
