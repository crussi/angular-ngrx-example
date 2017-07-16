import { createDefaultUserProfileFilters, IUserProfileFilters } from '../user-profile-listing';
import { IUserProfile } from '../';

import {
  userProfileMatchesUserFilter,
  userProfileMatchesSearchQuery
} from './user-profile.functions';

describe('with Super Mario Odyssey', () => {
  let superMarioOdyssey: IUserProfile;

  beforeEach(() => {
    superMarioOdyssey = {
      id: '1',
      name: 'Super Mario Odyssey',
      email: 'description',
      user: 'Nintendo Switch'
    };
  });

  describe('userProfileMatchesSearchQuery(superMarioOdyssey, "Super")', () => {
    it('returns true', () => {
      const isMatched = userProfileMatchesSearchQuery(superMarioOdyssey, 'Super');
      expect(isMatched).toEqual(true);
    });
  });

  describe('userProfileMatchesSearchQuery(superMarioOdyssey, "Zelda")', () => {
    it('returns false', () => {
      const isMatched = userProfileMatchesSearchQuery(superMarioOdyssey, 'Zelda');
      expect(isMatched).toEqual(false);
    });
  });

  describe('userProfileMatchesSearchQuery(superMarioOdyssey, "")', () => {
    it('returns true', () => {
      const isMatched = userProfileMatchesSearchQuery(superMarioOdyssey, '');
      expect(isMatched).toEqual(true);
    });
  });

  describe('userProfileMatchesSearchQuery(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = userProfileMatchesSearchQuery(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('userProfileMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IUserProfileFilters = {
        ...createDefaultUserProfileFilters(),
        user: 'Nintendo Switch',
      };

      const isMatched = userProfileMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('userProfileMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IUserProfileFilters = {
        ...createDefaultUserProfileFilters(),
        user: 'Nintendo Switch',
      };

      const isMatched = userProfileMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('userProfileMatchesUserFilter(superMarioOdyssey, pc)', () => {
    it('returns false', () => {
      const pc: IUserProfileFilters = {
        ...createDefaultUserProfileFilters(),
        user: 'PC',
      };

      const isMatched = userProfileMatchesUserFilter(superMarioOdyssey, pc);
      expect(isMatched).toEqual(false);
    });
  });

  describe('userProfileMatchesUserFilter(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = userProfileMatchesUserFilter(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('and it is favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: true };
    });

    // describe('userProfileMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
    //   it('returns true', () => {
    //     const showFavorites: IUserProfileFilters = {
    //       ...createDefaultUserProfileFilters(),
    //       favorites: true,
    //     };

    //     const isMatched = userProfileMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
    //     expect(isMatched).toEqual(true);
    //   });
    // });

    // describe('userProfileMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
    //   it('returns true', () => {
    //     const showFavorites: IUserProfileFilters = {
    //       ...createDefaultUserProfileFilters(),
    //       favorites: false,
    //     };

    //     const isMatched = userProfileMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
    //     expect(isMatched).toEqual(true);
    //   });
    // });
  });

  describe('and it is not favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: false };
    });

    // describe('userProfileMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
    //   it('returns false', () => {
    //     const filters: IUserProfileFilters = {
    //       ...createDefaultUserProfileFilters(),
    //       favorites: true,
    //     };

    //     const isMatched = userProfileMatchesFavoritesFilter(superMarioOdyssey, filters);
    //     expect(isMatched).toEqual(false);
    //   });
    // });

    // describe('userProfileMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
    //   it('returns true', () => {
    //     const filters: IUserProfileFilters = {
    //       ...createDefaultUserProfileFilters(),
    //       favorites: false,
    //     };

    //     const isMatched = userProfileMatchesFavoritesFilter(superMarioOdyssey, filters);
    //     expect(isMatched).toEqual(true);
    //   });
    // });
  });
});

describe('when the game is falsy', () => {
  describe('userProfileMatchesSearchQuery(falsy, "Super")', () => {
    it('returns false', () => {
      const isMatched = userProfileMatchesSearchQuery(null, 'Super');
      expect(isMatched).toEqual(false);
    });
  });

  describe('userProfileMatchesUserFilter(falsy, "Nintendo Switch")', () => {
    const nintendoSwitch: IUserProfileFilters = {
      ...createDefaultUserProfileFilters(),
      user: 'Nintendo Switch'
    };

    it('returns false', () => {
      const isMatched = userProfileMatchesUserFilter(null, nintendoSwitch);
      expect(isMatched).toEqual(false);
    });
  });
});
