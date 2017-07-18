import { createAction } from '../../../store/create-action';
import { contactListingReducer } from './contact-listing.reducer';
import { ContactListingStore } from './contact-listing.store';
import {
  createDefaultContactListing,
  createContact,
  IContactListing,
} from '../../interfaces';

describe('contactListingReducer(falsy, unknownAction)', () => {
  const unknownAction = createAction('UNKNOWN');

  it('returns the default state', () => {
    const contactListing = contactListingReducer(null, unknownAction);
    expect(contactListing).toEqual(createDefaultContactListing());
  });
});

describe('contactListingReducer(contactListing, retrieveAction)', () => {
  const contactListing: IContactListing = {
    ...createDefaultContactListing(),
    loadingError: 'Error'
  };
  const retrieveAction = createAction(ContactListingStore.RETRIEVE);

  it('sets isLoading to true', () => {
    const newContactListing = contactListingReducer(contactListing, retrieveAction);
    expect(newContactListing.isLoading).toEqual(true);
  });

  it('clears out existing errors', () => {
    const newContactListing = contactListingReducer(contactListing, retrieveAction);
    expect(newContactListing.loadingError).toBeNull();
  });
});

describe('contactListingReducer(contactListing, retrieveSuccessAction)', () => {
  const contactListing = {
    ...createDefaultContactListing(),
    isLoading: true
  };
  const retrieveSuccessAction = createAction(ContactListingStore.RETRIEVE_SUCCESS, {
    contacts: [createContact('1', 'Super Mario')]
  });

  it('set the contactListing list', () => {
    const newContactListing = contactListingReducer(contactListing, retrieveSuccessAction);
    expect(newContactListing.contacts).toEqual([createContact('1', 'Super Mario')]);
  });

  it('should set isLoading to false', () => {
    const newContactListing = contactListingReducer(contactListing, retrieveSuccessAction);
    expect(newContactListing.isLoading).toEqual(false);
  });
});

describe('contactListingReducer(contactListing, retrieveErrorAction)', () => {
  const contactListing = {
    ...createDefaultContactListing(),
    isLoading: true
  };
  const retrieveErrorAction = createAction(ContactListingStore.RETRIEVE_ERROR, {
    error: 'Error Message'
  });

  it('set the loading error', () => {
    const newContactListing = contactListingReducer(contactListing, retrieveErrorAction);
    expect(newContactListing.loadingError).toEqual('Error Message');
  });

  it('should set isLoading to false', () => {
    const newContactListing = contactListingReducer(contactListing, retrieveErrorAction);
    expect(newContactListing.isLoading).toEqual(false);
  });
});

describe('contactListingReducer(contactListing, searchAction)', () => {
  const contactListing = createDefaultContactListing();
  const searchAction = createAction(ContactListingStore.SEARCH, {
    query: 'Super'
  });

  it('set the search query', () => {
    const newContactListing = contactListingReducer(contactListing, searchAction);
    expect(newContactListing.searchQuery).toEqual('Super');
  });
});

describe('contactListingReducer(contactListing, filterUserAction)', () => {
  const contactListing = createDefaultContactListing();
  const filterUserAction = createAction(ContactListingStore.FILTER_USER, {
    user: 'Nintendo Switch'
  });

  it('set the search query', () => {
    const newContactListing = contactListingReducer(contactListing, filterUserAction);
    expect(newContactListing.filters.user).toEqual('Nintendo Switch');
  });
});

// describe('contactListingReducer(contactListing, filterFavoritesAction)', () => {
//   const contactListing = createDefaultContactListing();
//   const filterFavoritesAction = createAction(ContactListingStore.TOGGLE_FAVORITE_FILTER);

//   it('favorites filter should be false', () => {
//     expect(contactListing.filters.favorites).toEqual(false);
//   });

//   it('favorites filter should be true', () => {
//     const newContactListing = contactListingReducer(contactListing, filterFavoritesAction);
//     expect(newContactListing.filters.favorites).toEqual(true);
//   });
// });

// describe('contactListingReducer(contactListing, toggleFavouriteAction)', () => {
//   const contactListing = {
//     ...createDefaultContactListing(),
//     contacts: [
//       createContact('1', 'Legend of Zelda')
//     ]
//   };

//   it('should be false', () => {
//     expect(contactListing.contacts[0].favorite).toEqual(false);
//   });

//   it('should set the "Legend of Zelda" favorite property to true', () => {
//     const toggleFavoriteAction = createAction(ContactListingStore.TOGGLE_FAVORITE, {id: '1'});
//     const newContactListing = contactListingReducer(contactListing, toggleFavoriteAction);
//     expect(newContactListing.contacts[0].favorite).toEqual(true);
//   });
// });
