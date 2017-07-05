import { createAction } from '../../../store/create-action';
import { nextActionListingReducer } from './next-action-listing.reducer';
import { NextActionListingStore } from './next-action-listing.store';
import {
  createDefaultNextActionListing,
  createNextAction,
  INextActionListing,
} from '../../interfaces';

describe('nextActionListingReducer(falsy, unknownAction)', () => {
  const unknownAction = createAction('UNKNOWN');

  it('returns the default state', () => {
    const nextActionListing = nextActionListingReducer(null, unknownAction);
    expect(nextActionListing).toEqual(createDefaultNextActionListing());
  });
});

describe('nextActionListingReducer(nextActionListing, retrieveAction)', () => {
  const nextActionListing: INextActionListing = {
    ...createDefaultNextActionListing(),
    loadingError: 'Error'
  };
  const retrieveAction = createAction(NextActionListingStore.RETRIEVE);

  it('sets isLoading to true', () => {
    const newNextActionListing = nextActionListingReducer(nextActionListing, retrieveAction);
    expect(newNextActionListing.isLoading).toEqual(true);
  });

  it('clears out existing errors', () => {
    const newNextActionListing = nextActionListingReducer(nextActionListing, retrieveAction);
    expect(newNextActionListing.loadingError).toBeNull();
  });
});

describe('nextActionListingReducer(nextActionListing, retrieveSuccessAction)', () => {
  const nextActionListing = {
    ...createDefaultNextActionListing(),
    isLoading: true
  };
  const retrieveSuccessAction = createAction(NextActionListingStore.RETRIEVE_SUCCESS, {
    nextActions: [createNextAction('1', 'Super Mario')]
  });

  it('set the nextActionListing list', () => {
    const newNextActionListing = nextActionListingReducer(nextActionListing, retrieveSuccessAction);
    expect(newNextActionListing.nextActions).toEqual([createNextAction('1', 'Super Mario')]);
  });

  it('should set isLoading to false', () => {
    const newNextActionListing = nextActionListingReducer(nextActionListing, retrieveSuccessAction);
    expect(newNextActionListing.isLoading).toEqual(false);
  });
});

describe('nextActionListingReducer(nextActionListing, retrieveErrorAction)', () => {
  const nextActionListing = {
    ...createDefaultNextActionListing(),
    isLoading: true
  };
  const retrieveErrorAction = createAction(NextActionListingStore.RETRIEVE_ERROR, {
    error: 'Error Message'
  });

  it('set the loading error', () => {
    const newNextActionListing = nextActionListingReducer(nextActionListing, retrieveErrorAction);
    expect(newNextActionListing.loadingError).toEqual('Error Message');
  });

  it('should set isLoading to false', () => {
    const newNextActionListing = nextActionListingReducer(nextActionListing, retrieveErrorAction);
    expect(newNextActionListing.isLoading).toEqual(false);
  });
});

describe('nextActionListingReducer(nextActionListing, searchAction)', () => {
  const nextActionListing = createDefaultNextActionListing();
  const searchAction = createAction(NextActionListingStore.SEARCH, {
    query: 'Super'
  });

  it('set the search query', () => {
    const newNextActionListing = nextActionListingReducer(nextActionListing, searchAction);
    expect(newNextActionListing.searchQuery).toEqual('Super');
  });
});

describe('nextActionListingReducer(nextActionListing, filterUserAction)', () => {
  const nextActionListing = createDefaultNextActionListing();
  const filterUserAction = createAction(NextActionListingStore.FILTER_USER, {
    user: 'Nintendo Switch'
  });

  it('set the search query', () => {
    const newNextActionListing = nextActionListingReducer(nextActionListing, filterUserAction);
    expect(newNextActionListing.filters.user).toEqual('Nintendo Switch');
  });
});

describe('nextActionListingReducer(nextActionListing, filterFavoritesAction)', () => {
  const nextActionListing = createDefaultNextActionListing();
  const filterFavoritesAction = createAction(NextActionListingStore.TOGGLE_FAVORITE_FILTER);

  it('favorites filter should be false', () => {
    expect(nextActionListing.filters.favorites).toEqual(false);
  });

  it('favorites filter should be true', () => {
    const newNextActionListing = nextActionListingReducer(nextActionListing, filterFavoritesAction);
    expect(newNextActionListing.filters.favorites).toEqual(true);
  });
});

describe('nextActionListingReducer(nextActionListing, toggleFavouriteAction)', () => {
  const nextActionListing = {
    ...createDefaultNextActionListing(),
    nextActions: [
      createNextAction('1', 'Legend of Zelda')
    ]
  };

  it('should be false', () => {
    expect(nextActionListing.nextActions[0].favorite).toEqual(false);
  });

  it('should set the "Legend of Zelda" favorite property to true', () => {
    const toggleFavoriteAction = createAction(NextActionListingStore.TOGGLE_FAVORITE, {id: '1'});
    const newNextActionListing = nextActionListingReducer(nextActionListing, toggleFavoriteAction);
    expect(newNextActionListing.nextActions[0].favorite).toEqual(true);
  });
});
