import { createAction } from '../../../store/create-action';
import { delegatedItemListingReducer } from './delegated-item-listing.reducer';
import { DelegatedItemListingStore } from './delegated-item-listing.store';
import {
  createDefaultDelegatedItemListing,
  createDelegatedItem,
  IDelegatedItemListing,
} from '../../interfaces';

describe('delegatedItemListingReducer(falsy, unknownAction)', () => {
  const unknownAction = createAction('UNKNOWN');

  it('returns the default state', () => {
    const delegatedItemListing = delegatedItemListingReducer(null, unknownAction);
    expect(delegatedItemListing).toEqual(createDefaultDelegatedItemListing());
  });
});

describe('delegatedItemListingReducer(delegatedItemListing, retrieveAction)', () => {
  const delegatedItemListing: IDelegatedItemListing = {
    ...createDefaultDelegatedItemListing(),
    loadingError: 'Error'
  };
  const retrieveAction = createAction(DelegatedItemListingStore.RETRIEVE);

  it('sets isLoading to true', () => {
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, retrieveAction);
    expect(newDelegatedItemListing.isLoading).toEqual(true);
  });

  it('clears out existing errors', () => {
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, retrieveAction);
    expect(newDelegatedItemListing.loadingError).toBeNull();
  });
});

describe('delegatedItemListingReducer(delegatedItemListing, retrieveSuccessAction)', () => {
  const delegatedItemListing = {
    ...createDefaultDelegatedItemListing(),
    isLoading: true
  };
  const retrieveSuccessAction = createAction(DelegatedItemListingStore.RETRIEVE_SUCCESS, {
    delegatedItems: [createDelegatedItem('1', 'Super Mario')]
  });

  it('set the delegatedItemListing list', () => {
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, retrieveSuccessAction);
    expect(newDelegatedItemListing.delegatedItems).toEqual([createDelegatedItem('1', 'Super Mario')]);
  });

  it('should set isLoading to false', () => {
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, retrieveSuccessAction);
    expect(newDelegatedItemListing.isLoading).toEqual(false);
  });
});

describe('delegatedItemListingReducer(delegatedItemListing, retrieveErrorAction)', () => {
  const delegatedItemListing = {
    ...createDefaultDelegatedItemListing(),
    isLoading: true
  };
  const retrieveErrorAction = createAction(DelegatedItemListingStore.RETRIEVE_ERROR, {
    error: 'Error Message'
  });

  it('set the loading error', () => {
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, retrieveErrorAction);
    expect(newDelegatedItemListing.loadingError).toEqual('Error Message');
  });

  it('should set isLoading to false', () => {
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, retrieveErrorAction);
    expect(newDelegatedItemListing.isLoading).toEqual(false);
  });
});

describe('delegatedItemListingReducer(delegatedItemListing, searchAction)', () => {
  const delegatedItemListing = createDefaultDelegatedItemListing();
  const searchAction = createAction(DelegatedItemListingStore.SEARCH, {
    query: 'Super'
  });

  it('set the search query', () => {
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, searchAction);
    expect(newDelegatedItemListing.searchQuery).toEqual('Super');
  });
});

describe('delegatedItemListingReducer(delegatedItemListing, filterUserAction)', () => {
  const delegatedItemListing = createDefaultDelegatedItemListing();
  const filterUserAction = createAction(DelegatedItemListingStore.FILTER_USER, {
    user: 'Nintendo Switch'
  });

  it('set the search query', () => {
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, filterUserAction);
    expect(newDelegatedItemListing.filters.user).toEqual('Nintendo Switch');
  });
});

describe('delegatedItemListingReducer(delegatedItemListing, filterFavoritesAction)', () => {
  const delegatedItemListing = createDefaultDelegatedItemListing();
  const filterFavoritesAction = createAction(DelegatedItemListingStore.TOGGLE_FAVORITE_FILTER);

  it('favorites filter should be false', () => {
    expect(delegatedItemListing.filters.favorites).toEqual(false);
  });

  it('favorites filter should be true', () => {
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, filterFavoritesAction);
    expect(newDelegatedItemListing.filters.favorites).toEqual(true);
  });
});

describe('delegatedItemListingReducer(delegatedItemListing, toggleFavouriteAction)', () => {
  const delegatedItemListing = {
    ...createDefaultDelegatedItemListing(),
    delegatedItems: [
      createDelegatedItem('1', 'Legend of Zelda')
    ]
  };

  it('should be false', () => {
    expect(delegatedItemListing.delegatedItems[0].favorite).toEqual(false);
  });

  it('should set the "Legend of Zelda" favorite property to true', () => {
    const toggleFavoriteAction = createAction(DelegatedItemListingStore.TOGGLE_FAVORITE, {id: '1'});
    const newDelegatedItemListing = delegatedItemListingReducer(delegatedItemListing, toggleFavoriteAction);
    expect(newDelegatedItemListing.delegatedItems[0].favorite).toEqual(true);
  });
});
