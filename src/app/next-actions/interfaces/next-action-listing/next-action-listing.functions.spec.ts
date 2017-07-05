import { createNextAction } from '../next-action';
import { INextActionListing } from './next-action-listing.interface';
import {
  createDefaultNextActionListing,
  getNextAction,
  getNextActions
} from './next-action-listing.functions';
import { createDefaultNextActionFilters } from './next-action-filters.functions';

describe('when there is a list of 3 unsorted video games', () => {
  const unsortedNextActionListing: INextActionListing = {
    ...createDefaultNextActionListing(),
    nextActions: [
      createNextAction('1', 'Super Mario'),
      createNextAction('2', 'Legend of Zelda'),
      createNextAction('3', 'Metroid'),
    ]
  };

  describe('getNextActions(unsortedNextActionListing)', () => {
    it('returns a list of containing 3 elements', () => {
      const nextActions = getNextActions(unsortedNextActionListing);
      expect(nextActions.length).toEqual(3);
    });

    it('returns a list that is sorted by title', () => {
      const nextActions = getNextActions(unsortedNextActionListing);
      expect(nextActions[0].id).toEqual('2');
      expect(nextActions[1].id).toEqual('3');
      expect(nextActions[2].id).toEqual('1');
    });
  });

  describe('getNextAction(unsortedNextActionListing, "1")', () => {
    it('should get the matched video game via its id', () => {
      const nextAction = getNextAction(unsortedNextActionListing, '1');
      expect(nextAction).toEqual(unsortedNextActionListing.nextActions[0]);
    });
  });

  describe('getNextAction(unsortedNextActionListing, falsy)', () => {
    it('returns falsy', () => {
      const nextAction = getNextAction(unsortedNextActionListing, null);
      expect(nextAction).toBeFalsy();
    });
  });
});

describe('when there is a list of games from different users', () => {
  const nextActionListing: INextActionListing = {
    ...createDefaultNextActionListing(),
    nextActions: [
      createNextAction('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createNextAction('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultNextActionFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const nextActions = getNextActions(nextActionListing);
    expect(nextActions.length).toEqual(1);
    expect(nextActions[0].id).toEqual('2');
  });
});

describe('when there is a list of games from different users', () => {
  const nextActionListing: INextActionListing = {
    ...createDefaultNextActionListing(),
    nextActions: [
      createNextAction('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createNextAction('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultNextActionFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const nextActions = getNextActions(nextActionListing);
    expect(nextActions.length).toEqual(1);
    expect(nextActions[0].id).toEqual('2');
  });
});

describe('when there is a list of games with a search query', () => {
  const nextActionListing: INextActionListing = {
    ...createDefaultNextActionListing(),
    nextActions: [
      createNextAction('1', 'Super Mario Odyssey'),
      createNextAction('2', 'Pillars of Eternity')
    ],
    searchQuery: 'Sup'
  };

  it('should return a list that includes the searchQuery string', () => {
    const nextActions = getNextActions(nextActionListing);
    expect(nextActions.length).toEqual(1);
    expect(nextActions[0].id).toEqual('1');
  });
});

describe('when the list is falsy', () => {
  describe('getNextAction(falsy, "1")', () => {
    it('returns falsy', () => {
      const nextAction = getNextAction(null, '1');
      expect(nextAction).toBeFalsy();
    });
  });

  describe('getNextActions(falsy)', () => {
    it('returns an empty list', () => {
      const nextAction = getNextActions(null);
      expect(nextAction).toEqual([]);
    });
  });
});
