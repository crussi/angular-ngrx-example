import { createAction } from '../../../store/create-action';
import { inboxItemListingReducer } from './inbox-item-listing.reducer';
import { InboxItemListingStore } from './inbox-item-listing.store';
import {
  createDefaultInboxItemListing,
  createInboxItem,
  IInboxItemListing,
} from '../../interfaces';

describe('inboxItemListingReducer(falsy, unknownAction)', () => {
  const unknownAction = createAction('UNKNOWN');

  it('returns the default state', () => {
    const inboxItemListing = inboxItemListingReducer(null, unknownAction);
    expect(inboxItemListing).toEqual(createDefaultInboxItemListing());
  });
});

describe('inboxItemListingReducer(inboxItemListing, retrieveAction)', () => {
  const inboxItemListing: IInboxItemListing = {
    ...createDefaultInboxItemListing(),
    loadingError: 'Error'
  };
  const retrieveAction = createAction(InboxItemListingStore.RETRIEVE);

  it('sets isLoading to true', () => {
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, retrieveAction);
    expect(newInboxItemListing.isLoading).toEqual(true);
  });

  it('clears out existing errors', () => {
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, retrieveAction);
    expect(newInboxItemListing.loadingError).toBeNull();
  });
});

describe('inboxItemListingReducer(inboxItemListing, retrieveSuccessAction)', () => {
  const inboxItemListing = {
    ...createDefaultInboxItemListing(),
    isLoading: true
  };
  const retrieveSuccessAction = createAction(InboxItemListingStore.RETRIEVE_SUCCESS, {
    inboxItems: [createInboxItem('1', 'Super Mario')]
  });

  it('set the inboxItemListing list', () => {
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, retrieveSuccessAction);
    expect(newInboxItemListing.inboxItems).toEqual([createInboxItem('1', 'Super Mario')]);
  });

  it('should set isLoading to false', () => {
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, retrieveSuccessAction);
    expect(newInboxItemListing.isLoading).toEqual(false);
  });
});

describe('inboxItemListingReducer(inboxItemListing, retrieveErrorAction)', () => {
  const inboxItemListing = {
    ...createDefaultInboxItemListing(),
    isLoading: true
  };
  const retrieveErrorAction = createAction(InboxItemListingStore.RETRIEVE_ERROR, {
    error: 'Error Message'
  });

  it('set the loading error', () => {
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, retrieveErrorAction);
    expect(newInboxItemListing.loadingError).toEqual('Error Message');
  });

  it('should set isLoading to false', () => {
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, retrieveErrorAction);
    expect(newInboxItemListing.isLoading).toEqual(false);
  });
});

describe('inboxItemListingReducer(inboxItemListing, searchAction)', () => {
  const inboxItemListing = createDefaultInboxItemListing();
  const searchAction = createAction(InboxItemListingStore.SEARCH, {
    query: 'Super'
  });

  it('set the search query', () => {
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, searchAction);
    expect(newInboxItemListing.searchQuery).toEqual('Super');
  });
});

describe('inboxItemListingReducer(inboxItemListing, filterPlatformAction)', () => {
  const inboxItemListing = createDefaultInboxItemListing();
  const filterPlatformAction = createAction(InboxItemListingStore.FILTER_PLATFORM, {
    platform: 'Nintendo Switch'
  });

  it('set the search query', () => {
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, filterPlatformAction);
    expect(newInboxItemListing.filters.platform).toEqual('Nintendo Switch');
  });
});

describe('inboxItemListingReducer(inboxItemListing, filterFavoritesAction)', () => {
  const inboxItemListing = createDefaultInboxItemListing();
  const filterFavoritesAction = createAction(InboxItemListingStore.TOGGLE_FAVORITE_FILTER);

  it('favorites filter should be false', () => {
    expect(inboxItemListing.filters.favorites).toEqual(false);
  });

  it('favorites filter should be true', () => {
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, filterFavoritesAction);
    expect(newInboxItemListing.filters.favorites).toEqual(true);
  });
});

describe('inboxItemListingReducer(inboxItemListing, toggleFavouriteAction)', () => {
  const inboxItemListing = {
    ...createDefaultInboxItemListing(),
    inboxItems: [
      createInboxItem('1', 'Legend of Zelda')
    ]
  };

  it('should be false', () => {
    expect(inboxItemListing.inboxItems[0].favorite).toEqual(false);
  });

  it('should set the "Legend of Zelda" favorite property to true', () => {
    const toggleFavoriteAction = createAction(InboxItemListingStore.TOGGLE_FAVORITE, {id: '1'});
    const newInboxItemListing = inboxItemListingReducer(inboxItemListing, toggleFavoriteAction);
    expect(newInboxItemListing.inboxItems[0].favorite).toEqual(true);
  });
});
