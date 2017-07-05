import { createDefaultNextActionFilters, INextActionFilters } from '../next-action-listing';
import { INextAction } from '../../../shared/barrel';

import {
  nextActionMatchesFavoritesFilter,
  nextActionMatchesUserFilter,
  nextActionMatchesSearchQuery
} from './next-action.functions';

describe('with Super Mario Odyssey', () => {
  let superMarioOdyssey: INextAction;

  beforeEach(() => {
    superMarioOdyssey = {
      id: '1',
      title: 'Super Mario Odyssey',
      description: 'description',
      user: 'Nintendo Switch',
      youtubeUrl: 'youtube.com',
      favorite: false,
    };
  });

  describe('nextActionMatchesSearchQuery(superMarioOdyssey, "Super")', () => {
    it('returns true', () => {
      const isMatched = nextActionMatchesSearchQuery(superMarioOdyssey, 'Super');
      expect(isMatched).toEqual(true);
    });
  });

  describe('nextActionMatchesSearchQuery(superMarioOdyssey, "Zelda")', () => {
    it('returns false', () => {
      const isMatched = nextActionMatchesSearchQuery(superMarioOdyssey, 'Zelda');
      expect(isMatched).toEqual(false);
    });
  });

  describe('nextActionMatchesSearchQuery(superMarioOdyssey, "")', () => {
    it('returns true', () => {
      const isMatched = nextActionMatchesSearchQuery(superMarioOdyssey, '');
      expect(isMatched).toEqual(true);
    });
  });

  describe('nextActionMatchesSearchQuery(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = nextActionMatchesSearchQuery(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('nextActionMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: INextActionFilters = {
        ...createDefaultNextActionFilters(),
        user: 'Nintendo Switch',
      };

      const isMatched = nextActionMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('nextActionMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: INextActionFilters = {
        ...createDefaultNextActionFilters(),
        user: 'Nintendo Switch',
      };

      const isMatched = nextActionMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('nextActionMatchesUserFilter(superMarioOdyssey, pc)', () => {
    it('returns false', () => {
      const pc: INextActionFilters = {
        ...createDefaultNextActionFilters(),
        user: 'PC',
      };

      const isMatched = nextActionMatchesUserFilter(superMarioOdyssey, pc);
      expect(isMatched).toEqual(false);
    });
  });

  describe('nextActionMatchesUserFilter(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = nextActionMatchesUserFilter(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('and it is favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: true };
    });

    describe('nextActionMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
      it('returns true', () => {
        const showFavorites: INextActionFilters = {
          ...createDefaultNextActionFilters(),
          favorites: true,
        };

        const isMatched = nextActionMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
        expect(isMatched).toEqual(true);
      });
    });

    describe('nextActionMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
      it('returns true', () => {
        const showFavorites: INextActionFilters = {
          ...createDefaultNextActionFilters(),
          favorites: false,
        };

        const isMatched = nextActionMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
        expect(isMatched).toEqual(true);
      });
    });
  });

  describe('and it is not favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: false };
    });

    describe('nextActionMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
      it('returns false', () => {
        const filters: INextActionFilters = {
          ...createDefaultNextActionFilters(),
          favorites: true,
        };

        const isMatched = nextActionMatchesFavoritesFilter(superMarioOdyssey, filters);
        expect(isMatched).toEqual(false);
      });
    });

    describe('nextActionMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
      it('returns true', () => {
        const filters: INextActionFilters = {
          ...createDefaultNextActionFilters(),
          favorites: false,
        };

        const isMatched = nextActionMatchesFavoritesFilter(superMarioOdyssey, filters);
        expect(isMatched).toEqual(true);
      });
    });
  });
});

describe('when the game is falsy', () => {
  describe('nextActionMatchesSearchQuery(falsy, "Super")', () => {
    it('returns false', () => {
      const isMatched = nextActionMatchesSearchQuery(null, 'Super');
      expect(isMatched).toEqual(false);
    });
  });

  describe('nextActionMatchesUserFilter(falsy, "Nintendo Switch")', () => {
    const nintendoSwitch: INextActionFilters = {
      ...createDefaultNextActionFilters(),
      user: 'Nintendo Switch'
    };

    it('returns false', () => {
      const isMatched = nextActionMatchesUserFilter(null, nintendoSwitch);
      expect(isMatched).toEqual(false);
    });
  });
});
