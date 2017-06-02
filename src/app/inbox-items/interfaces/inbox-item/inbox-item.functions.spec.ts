import { createDefaultInboxItemFilters, IInboxItemFilters } from '../inbox-item-listing';
import { IInboxItem } from './inbox-item.interface';
import {
  inboxItemMatchesFavoritesFilter,
  inboxItemMatchesPlatformFilter,
  inboxItemMatchesSearchQuery
} from './inbox-item.functions';

describe('with Super Mario Odyssey', () => {
  let superMarioOdyssey: IInboxItem;

  beforeEach(() => {
    superMarioOdyssey = {
      id: '1',
      title: 'Super Mario Odyssey',
      description: 'description',
      platform: 'Nintendo Switch',
      youtubeUrl: 'youtube.com',
      favorite: false,
    };
  });

  describe('inboxItemMatchesSearchQuery(superMarioOdyssey, "Super")', () => {
    it('returns true', () => {
      const isMatched = inboxItemMatchesSearchQuery(superMarioOdyssey, 'Super');
      expect(isMatched).toEqual(true);
    });
  });

  describe('inboxItemMatchesSearchQuery(superMarioOdyssey, "Zelda")', () => {
    it('returns false', () => {
      const isMatched = inboxItemMatchesSearchQuery(superMarioOdyssey, 'Zelda');
      expect(isMatched).toEqual(false);
    });
  });

  describe('inboxItemMatchesSearchQuery(superMarioOdyssey, "")', () => {
    it('returns true', () => {
      const isMatched = inboxItemMatchesSearchQuery(superMarioOdyssey, '');
      expect(isMatched).toEqual(true);
    });
  });

  describe('inboxItemMatchesSearchQuery(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = inboxItemMatchesSearchQuery(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('inboxItemMatchesPlatformFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IInboxItemFilters = {
        ...createDefaultInboxItemFilters(),
        platform: 'Nintendo Switch',
      };

      const isMatched = inboxItemMatchesPlatformFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('inboxItemMatchesPlatformFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IInboxItemFilters = {
        ...createDefaultInboxItemFilters(),
        platform: 'Nintendo Switch',
      };

      const isMatched = inboxItemMatchesPlatformFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('inboxItemMatchesPlatformFilter(superMarioOdyssey, pc)', () => {
    it('returns false', () => {
      const pc: IInboxItemFilters = {
        ...createDefaultInboxItemFilters(),
        platform: 'PC',
      };

      const isMatched = inboxItemMatchesPlatformFilter(superMarioOdyssey, pc);
      expect(isMatched).toEqual(false);
    });
  });

  describe('inboxItemMatchesPlatformFilter(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = inboxItemMatchesPlatformFilter(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('and it is favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: true };
    });

    describe('inboxItemMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
      it('returns true', () => {
        const showFavorites: IInboxItemFilters = {
          ...createDefaultInboxItemFilters(),
          favorites: true,
        };

        const isMatched = inboxItemMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
        expect(isMatched).toEqual(true);
      });
    });

    describe('inboxItemMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
      it('returns true', () => {
        const showFavorites: IInboxItemFilters = {
          ...createDefaultInboxItemFilters(),
          favorites: false,
        };

        const isMatched = inboxItemMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
        expect(isMatched).toEqual(true);
      });
    });
  });

  describe('and it is not favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: false };
    });

    describe('inboxItemMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
      it('returns false', () => {
        const filters: IInboxItemFilters = {
          ...createDefaultInboxItemFilters(),
          favorites: true,
        };

        const isMatched = inboxItemMatchesFavoritesFilter(superMarioOdyssey, filters);
        expect(isMatched).toEqual(false);
      });
    });

    describe('inboxItemMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
      it('returns true', () => {
        const filters: IInboxItemFilters = {
          ...createDefaultInboxItemFilters(),
          favorites: false,
        };

        const isMatched = inboxItemMatchesFavoritesFilter(superMarioOdyssey, filters);
        expect(isMatched).toEqual(true);
      });
    });
  });
});

describe('when the game is falsy', () => {
  describe('inboxItemMatchesSearchQuery(falsy, "Super")', () => {
    it('returns false', () => {
      const isMatched = inboxItemMatchesSearchQuery(null, 'Super');
      expect(isMatched).toEqual(false);
    });
  });

  describe('inboxItemMatchesPlatformFilter(falsy, "Nintendo Switch")', () => {
    const nintendoSwitch: IInboxItemFilters = {
      ...createDefaultInboxItemFilters(),
      platform: 'Nintendo Switch'
    };

    it('returns false', () => {
      const isMatched = inboxItemMatchesPlatformFilter(null, nintendoSwitch);
      expect(isMatched).toEqual(false);
    });
  });
});
