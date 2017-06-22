import { createAction } from '../../../store/create-action';
import { listItemListingReducer } from './list-item-listing.reducer';
import { ListItemListingStore } from './list-item-listing.store';
import {
  createDefaultListItemListing,
  createListItem,
  IListItemListing,
} from '../../interfaces';

describe('listItemListingReducer(falsy, unknownAction)', () => {
  const unknownAction = createAction('UNKNOWN');

  it('returns the default state', () => {
    const listItemListing = listItemListingReducer(null, unknownAction);
    expect(listItemListing).toEqual(createDefaultListItemListing());
  });
});

describe('listItemListingReducer(listItemListing, retrieveAction)', () => {
  const listItemListing: IListItemListing = {
    ...createDefaultListItemListing(),
    loadingError: 'Error'
  };
  const retrieveAction = createAction(ListItemListingStore.RETRIEVE);

  it('sets isLoading to true', () => {
    const newListItemListing = listItemListingReducer(listItemListing, retrieveAction);
    expect(newListItemListing.isLoading).toEqual(true);
  });

  it('clears out existing errors', () => {
    const newListItemListing = listItemListingReducer(listItemListing, retrieveAction);
    expect(newListItemListing.loadingError).toBeNull();
  });
});

describe('listItemListingReducer(listItemListing, retrieveSuccessAction)', () => {
  const listItemListing = {
    ...createDefaultListItemListing(),
    isLoading: true
  };
  const retrieveSuccessAction = createAction(ListItemListingStore.RETRIEVE_SUCCESS, {
    listItems: [createListItem('1', 'Super Mario')]
  });

  it('set the listItemListing list', () => {
    const newListItemListing = listItemListingReducer(listItemListing, retrieveSuccessAction);
    expect(newListItemListing.listItems).toEqual([createListItem('1', 'Super Mario')]);
  });

  it('should set isLoading to false', () => {
    const newListItemListing = listItemListingReducer(listItemListing, retrieveSuccessAction);
    expect(newListItemListing.isLoading).toEqual(false);
  });
});

describe('listItemListingReducer(listItemListing, retrieveErrorAction)', () => {
  const listItemListing = {
    ...createDefaultListItemListing(),
    isLoading: true
  };
  const retrieveErrorAction = createAction(ListItemListingStore.RETRIEVE_ERROR, {
    error: 'Error Message'
  });

  it('set the loading error', () => {
    const newListItemListing = listItemListingReducer(listItemListing, retrieveErrorAction);
    expect(newListItemListing.loadingError).toEqual('Error Message');
  });

  it('should set isLoading to false', () => {
    const newListItemListing = listItemListingReducer(listItemListing, retrieveErrorAction);
    expect(newListItemListing.isLoading).toEqual(false);
  });
});

describe('listItemListingReducer(listItemListing, searchAction)', () => {
  const listItemListing = createDefaultListItemListing();
  const searchAction = createAction(ListItemListingStore.SEARCH, {
    query: 'Super'
  });

  it('set the search query', () => {
    const newListItemListing = listItemListingReducer(listItemListing, searchAction);
    expect(newListItemListing.searchQuery).toEqual('Super');
  });
});

describe('listItemListingReducer(listItemListing, filterUserAction)', () => {
  const listItemListing = createDefaultListItemListing();
  const filterUserAction = createAction(ListItemListingStore.FILTER_USER, {
    user: 'Nintendo Switch'
  });

  it('set the search query', () => {
    const newListItemListing = listItemListingReducer(listItemListing, filterUserAction);
    expect(newListItemListing.filters.user).toEqual('Nintendo Switch');
  });
});

describe('listItemListingReducer(listItemListing, filterFavoritesAction)', () => {
  const listItemListing = createDefaultListItemListing();
  const filterFavoritesAction = createAction(ListItemListingStore.TOGGLE_FAVORITE_FILTER);

  it('favorites filter should be false', () => {
    expect(listItemListing.filters.favorites).toEqual(false);
  });

  it('favorites filter should be true', () => {
    const newListItemListing = listItemListingReducer(listItemListing, filterFavoritesAction);
    expect(newListItemListing.filters.favorites).toEqual(true);
  });
});

describe('listItemListingReducer(listItemListing, toggleFavouriteAction)', () => {
  const listItemListing = {
    ...createDefaultListItemListing(),
    listItems: [
      createListItem('1', 'Legend of Zelda')
    ]
  };

  it('should be false', () => {
    expect(listItemListing.listItems[0].favorite).toEqual(false);
  });

  it('should set the "Legend of Zelda" favorite property to true', () => {
    const toggleFavoriteAction = createAction(ListItemListingStore.TOGGLE_FAVORITE, {id: '1'});
    const newListItemListing = listItemListingReducer(listItemListing, toggleFavoriteAction);
    expect(newListItemListing.listItems[0].favorite).toEqual(true);
  });
});
