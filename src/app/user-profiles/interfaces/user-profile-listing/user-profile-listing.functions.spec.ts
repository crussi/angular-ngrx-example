import { createUserProfile } from '../user-profile';
import { IUserProfileListing } from './user-profile-listing.interface';
import {
  createDefaultUserProfileListing,
  getUserProfile,
  getUserProfiles
} from './user-profile-listing.functions';
import { createDefaultUserProfileFilters } from './user-profile-filters.functions';

describe('when there is a list of 3 unsorted video games', () => {
  const unsortedUserProfileListing: IUserProfileListing = {
    ...createDefaultUserProfileListing(),
    userProfiles: [
      createUserProfile('1', 'Super Mario'),
      createUserProfile('2', 'Legend of Zelda'),
      createUserProfile('3', 'Metroid'),
    ]
  };

  describe('getUserProfiles(unsortedUserProfileListing)', () => {
    it('returns a list of containing 3 elements', () => {
      const userProfiles = getUserProfiles(unsortedUserProfileListing);
      expect(userProfiles.length).toEqual(3);
    });

    it('returns a list that is sorted by title', () => {
      const userProfiles = getUserProfiles(unsortedUserProfileListing);
      expect(userProfiles[0].id).toEqual('2');
      expect(userProfiles[1].id).toEqual('3');
      expect(userProfiles[2].id).toEqual('1');
    });
  });

  describe('getUserProfile(unsortedUserProfileListing, "1")', () => {
    it('should get the matched video game via its id', () => {
      const userProfile = getUserProfile(unsortedUserProfileListing, '1');
      expect(userProfile).toEqual(unsortedUserProfileListing.userProfiles[0]);
    });
  });

  describe('getUserProfile(unsortedUserProfileListing, falsy)', () => {
    it('returns falsy', () => {
      const userProfile = getUserProfile(unsortedUserProfileListing, null);
      expect(userProfile).toBeFalsy();
    });
  });
});

describe('when there is a list of games from different users', () => {
  const userProfileListing: IUserProfileListing = {
    ...createDefaultUserProfileListing(),
    userProfiles: [
      createUserProfile('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createUserProfile('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultUserProfileFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const userProfiles = getUserProfiles(userProfileListing);
    expect(userProfiles.length).toEqual(1);
    expect(userProfiles[0].id).toEqual('2');
  });
});

describe('when there is a list of games from different users', () => {
  const userProfileListing: IUserProfileListing = {
    ...createDefaultUserProfileListing(),
    userProfiles: [
      createUserProfile('1', 'Super Mario Odyssey', 'Nintendo Switch'),
      createUserProfile('2', 'Pillars of Eternity', 'PC')
    ],
    filters: {
      ...createDefaultUserProfileFilters(),
      user: 'PC'
    }
  };

  it('should return a list that matches the specified user only', () => {
    const userProfiles = getUserProfiles(userProfileListing);
    expect(userProfiles.length).toEqual(1);
    expect(userProfiles[0].id).toEqual('2');
  });
});

describe('when there is a list of games with a search query', () => {
  const userProfileListing: IUserProfileListing = {
    ...createDefaultUserProfileListing(),
    userProfiles: [
      createUserProfile('1', 'Super Mario Odyssey'),
      createUserProfile('2', 'Pillars of Eternity')
    ],
    searchQuery: 'Sup'
  };

  it('should return a list that includes the searchQuery string', () => {
    const userProfiles = getUserProfiles(userProfileListing);
    expect(userProfiles.length).toEqual(1);
    expect(userProfiles[0].id).toEqual('1');
  });
});

describe('when the list is falsy', () => {
  describe('getUserProfile(falsy, "1")', () => {
    it('returns falsy', () => {
      const userProfile = getUserProfile(null, '1');
      expect(userProfile).toBeFalsy();
    });
  });

  describe('getUserProfiles(falsy)', () => {
    it('returns an empty list', () => {
      const userProfile = getUserProfiles(null);
      expect(userProfile).toEqual([]);
    });
  });
});
