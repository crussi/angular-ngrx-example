import { createAction } from '../../../store/create-action';
import { userProfileListingReducer } from './user-profile-listing.reducer';
import { UserProfileListingStore } from './user-profile-listing.store';
import {
  createDefaultUserProfileListing,
  createUserProfile,
  IUserProfileListing,
} from '../../interfaces';

describe('userProfileListingReducer(falsy, unknownAction)', () => {
  const unknownAction = createAction('UNKNOWN');

  it('returns the default state', () => {
    const userProfileListing = userProfileListingReducer(null, unknownAction);
    expect(userProfileListing).toEqual(createDefaultUserProfileListing());
  });
});

describe('userProfileListingReducer(userProfileListing, retrieveAction)', () => {
  const userProfileListing: IUserProfileListing = {
    ...createDefaultUserProfileListing(),
    loadingError: 'Error'
  };
  const retrieveAction = createAction(UserProfileListingStore.RETRIEVE);

  it('sets isLoading to true', () => {
    const newUserProfileListing = userProfileListingReducer(userProfileListing, retrieveAction);
    expect(newUserProfileListing.isLoading).toEqual(true);
  });

  it('clears out existing errors', () => {
    const newUserProfileListing = userProfileListingReducer(userProfileListing, retrieveAction);
    expect(newUserProfileListing.loadingError).toBeNull();
  });
});

describe('userProfileListingReducer(userProfileListing, retrieveSuccessAction)', () => {
  const userProfileListing = {
    ...createDefaultUserProfileListing(),
    isLoading: true
  };
  const retrieveSuccessAction = createAction(UserProfileListingStore.RETRIEVE_SUCCESS, {
    userProfiles: [createUserProfile('1', 'Super Mario')]
  });

  it('set the userProfileListing list', () => {
    const newUserProfileListing = userProfileListingReducer(userProfileListing, retrieveSuccessAction);
    expect(newUserProfileListing.userProfiles).toEqual([createUserProfile('1', 'Super Mario')]);
  });

  it('should set isLoading to false', () => {
    const newUserProfileListing = userProfileListingReducer(userProfileListing, retrieveSuccessAction);
    expect(newUserProfileListing.isLoading).toEqual(false);
  });
});

describe('userProfileListingReducer(userProfileListing, retrieveErrorAction)', () => {
  const userProfileListing = {
    ...createDefaultUserProfileListing(),
    isLoading: true
  };
  const retrieveErrorAction = createAction(UserProfileListingStore.RETRIEVE_ERROR, {
    error: 'Error Message'
  });

  it('set the loading error', () => {
    const newUserProfileListing = userProfileListingReducer(userProfileListing, retrieveErrorAction);
    expect(newUserProfileListing.loadingError).toEqual('Error Message');
  });

  it('should set isLoading to false', () => {
    const newUserProfileListing = userProfileListingReducer(userProfileListing, retrieveErrorAction);
    expect(newUserProfileListing.isLoading).toEqual(false);
  });
});

describe('userProfileListingReducer(userProfileListing, searchAction)', () => {
  const userProfileListing = createDefaultUserProfileListing();
  const searchAction = createAction(UserProfileListingStore.SEARCH, {
    query: 'Super'
  });

  it('set the search query', () => {
    const newUserProfileListing = userProfileListingReducer(userProfileListing, searchAction);
    expect(newUserProfileListing.searchQuery).toEqual('Super');
  });
});

describe('userProfileListingReducer(userProfileListing, filterUserAction)', () => {
  const userProfileListing = createDefaultUserProfileListing();
  const filterUserAction = createAction(UserProfileListingStore.FILTER_USER, {
    user: 'Nintendo Switch'
  });

  it('set the search query', () => {
    const newUserProfileListing = userProfileListingReducer(userProfileListing, filterUserAction);
    expect(newUserProfileListing.filters.user).toEqual('Nintendo Switch');
  });
});

describe('userProfileListingReducer(userProfileListing, filterFavoritesAction)', () => {
  const userProfileListing = createDefaultUserProfileListing();
  const filterFavoritesAction = createAction(UserProfileListingStore.TOGGLE_FAVORITE_FILTER);

  it('favorites filter should be false', () => {
    expect(userProfileListing.filters.favorites).toEqual(false);
  });

  it('favorites filter should be true', () => {
    const newUserProfileListing = userProfileListingReducer(userProfileListing, filterFavoritesAction);
    expect(newUserProfileListing.filters.favorites).toEqual(true);
  });
});

describe('userProfileListingReducer(userProfileListing, toggleFavouriteAction)', () => {
  const userProfileListing = {
    ...createDefaultUserProfileListing(),
    userProfiles: [
      createUserProfile('1', 'Legend of Zelda')
    ]
  };

  it('should be false', () => {
    expect(userProfileListing.userProfiles[0].favorite).toEqual(false);
  });

  it('should set the "Legend of Zelda" favorite property to true', () => {
    const toggleFavoriteAction = createAction(UserProfileListingStore.TOGGLE_FAVORITE, {id: '1'});
    const newUserProfileListing = userProfileListingReducer(userProfileListing, toggleFavoriteAction);
    expect(newUserProfileListing.userProfiles[0].favorite).toEqual(true);
  });
});
