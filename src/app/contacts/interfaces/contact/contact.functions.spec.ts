import { createDefaultContactFilters, IContactFilters } from '../contact-listing';
import { IContact } from '../';

import {
  contactMatchesUserFilter,
  contactMatchesSearchQuery
} from './contact.functions';

describe('with Super Mario Odyssey', () => {
  let superMarioOdyssey: IContact;

  beforeEach(() => {
    superMarioOdyssey = {
      id: '1',
      name: 'Super Mario Odyssey',
      email: 'description',
      user: 'Nintendo Switch'
    };
  });

  describe('contactMatchesSearchQuery(superMarioOdyssey, "Super")', () => {
    it('returns true', () => {
      const isMatched = contactMatchesSearchQuery(superMarioOdyssey, 'Super');
      expect(isMatched).toEqual(true);
    });
  });

  describe('contactMatchesSearchQuery(superMarioOdyssey, "Zelda")', () => {
    it('returns false', () => {
      const isMatched = contactMatchesSearchQuery(superMarioOdyssey, 'Zelda');
      expect(isMatched).toEqual(false);
    });
  });

  describe('contactMatchesSearchQuery(superMarioOdyssey, "")', () => {
    it('returns true', () => {
      const isMatched = contactMatchesSearchQuery(superMarioOdyssey, '');
      expect(isMatched).toEqual(true);
    });
  });

  describe('contactMatchesSearchQuery(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = contactMatchesSearchQuery(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('contactMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IContactFilters = {
        ...createDefaultContactFilters(),
        user: 'Nintendo Switch',
      };

      const isMatched = contactMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('contactMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IContactFilters = {
        ...createDefaultContactFilters(),
        user: 'Nintendo Switch',
      };

      const isMatched = contactMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('contactMatchesUserFilter(superMarioOdyssey, pc)', () => {
    it('returns false', () => {
      const pc: IContactFilters = {
        ...createDefaultContactFilters(),
        user: 'PC',
      };

      const isMatched = contactMatchesUserFilter(superMarioOdyssey, pc);
      expect(isMatched).toEqual(false);
    });
  });

  describe('contactMatchesUserFilter(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = contactMatchesUserFilter(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('and it is favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: true };
    });

    // describe('contactMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
    //   it('returns true', () => {
    //     const showFavorites: IContactFilters = {
    //       ...createDefaultContactFilters(),
    //       favorites: true,
    //     };

    //     const isMatched = contactMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
    //     expect(isMatched).toEqual(true);
    //   });
    // });

    // describe('contactMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
    //   it('returns true', () => {
    //     const showFavorites: IContactFilters = {
    //       ...createDefaultContactFilters(),
    //       favorites: false,
    //     };

    //     const isMatched = contactMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
    //     expect(isMatched).toEqual(true);
    //   });
    // });
  });

  describe('and it is not favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: false };
    });

    // describe('contactMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
    //   it('returns false', () => {
    //     const filters: IContactFilters = {
    //       ...createDefaultContactFilters(),
    //       favorites: true,
    //     };

    //     const isMatched = contactMatchesFavoritesFilter(superMarioOdyssey, filters);
    //     expect(isMatched).toEqual(false);
    //   });
    // });

    // describe('contactMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
    //   it('returns true', () => {
    //     const filters: IContactFilters = {
    //       ...createDefaultContactFilters(),
    //       favorites: false,
    //     };

    //     const isMatched = contactMatchesFavoritesFilter(superMarioOdyssey, filters);
    //     expect(isMatched).toEqual(true);
    //   });
    // });
  });
});

describe('when the game is falsy', () => {
  describe('contactMatchesSearchQuery(falsy, "Super")', () => {
    it('returns false', () => {
      const isMatched = contactMatchesSearchQuery(null, 'Super');
      expect(isMatched).toEqual(false);
    });
  });

  describe('contactMatchesUserFilter(falsy, "Nintendo Switch")', () => {
    const nintendoSwitch: IContactFilters = {
      ...createDefaultContactFilters(),
      user: 'Nintendo Switch'
    };

    it('returns false', () => {
      const isMatched = contactMatchesUserFilter(null, nintendoSwitch);
      expect(isMatched).toEqual(false);
    });
  });
});
