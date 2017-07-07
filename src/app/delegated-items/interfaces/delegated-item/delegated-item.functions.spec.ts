// import { createDefaultDelegatedItemFilters, IDelegatedItemFilters } from '../delegated-item-listing';
// //import { IDelegatedItem } from '../../../shared/barrel';
// import { IDelegatedItem } from '../../interfaces';

// import {
//   delegatedItemMatchesUserFilter,
//   delegatedItemMatchesSearchQuery
// } from './delegated-item.functions';

// describe('with Super Mario Odyssey', () => {
//   let superMarioOdyssey: IDelegatedItem;

//   beforeEach(() => {
//     superMarioOdyssey = {
//       id: '1',
//       title: 'Super Mario Odyssey',
//       description: 'description',
//       user: 'Nintendo Switch'
//     };
//   });

//   describe('delegatedItemMatchesSearchQuery(superMarioOdyssey, "Super")', () => {
//     it('returns true', () => {
//       const isMatched = delegatedItemMatchesSearchQuery(superMarioOdyssey, 'Super');
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('delegatedItemMatchesSearchQuery(superMarioOdyssey, "Zelda")', () => {
//     it('returns false', () => {
//       const isMatched = delegatedItemMatchesSearchQuery(superMarioOdyssey, 'Zelda');
//       expect(isMatched).toEqual(false);
//     });
//   });

//   describe('delegatedItemMatchesSearchQuery(superMarioOdyssey, "")', () => {
//     it('returns true', () => {
//       const isMatched = delegatedItemMatchesSearchQuery(superMarioOdyssey, '');
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('delegatedItemMatchesSearchQuery(superMarioOdyssey, falsy)', () => {
//     it('returns true', () => {
//       const isMatched = delegatedItemMatchesSearchQuery(superMarioOdyssey, null);
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('delegatedItemMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
//     it('returns true', () => {
//       const nintendoSwitch: IDelegatedItemFilters = {
//         ...createDefaultDelegatedItemFilters(),
//         user: 'Nintendo Switch',
//       };

//       const isMatched = delegatedItemMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('delegatedItemMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
//     it('returns true', () => {
//       const nintendoSwitch: IDelegatedItemFilters = {
//         ...createDefaultDelegatedItemFilters(),
//         user: 'Nintendo Switch',
//       };

//       const isMatched = delegatedItemMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('delegatedItemMatchesUserFilter(superMarioOdyssey, pc)', () => {
//     it('returns false', () => {
//       const pc: IDelegatedItemFilters = {
//         ...createDefaultDelegatedItemFilters(),
//         user: 'PC',
//       };

//       const isMatched = delegatedItemMatchesUserFilter(superMarioOdyssey, pc);
//       expect(isMatched).toEqual(false);
//     });
//   });

//   describe('delegatedItemMatchesUserFilter(superMarioOdyssey, falsy)', () => {
//     it('returns true', () => {
//       const isMatched = delegatedItemMatchesUserFilter(superMarioOdyssey, null);
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('and it is favourited', () => {
//     beforeEach(() => {
//       superMarioOdyssey = { ...superMarioOdyssey, favorite: true };
//     });

//     describe('delegatedItemMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
//       it('returns true', () => {
//         const showFavorites: IDelegatedItemFilters = {
//           ...createDefaultDelegatedItemFilters(),
//           favorites: true,
//         };

//         const isMatched = delegatedItemMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
//         expect(isMatched).toEqual(true);
//       });
//     });

//     describe('delegatedItemMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
//       it('returns true', () => {
//         const showFavorites: IDelegatedItemFilters = {
//           ...createDefaultDelegatedItemFilters(),
//           favorites: false,
//         };

//         const isMatched = delegatedItemMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
//         expect(isMatched).toEqual(true);
//       });
//     });
//   });

//   describe('and it is not favourited', () => {
//     beforeEach(() => {
//       superMarioOdyssey = { ...superMarioOdyssey, favorite: false };
//     });

//     describe('delegatedItemMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
//       it('returns false', () => {
//         const filters: IDelegatedItemFilters = {
//           ...createDefaultDelegatedItemFilters(),
//           favorites: true,
//         };

//         const isMatched = delegatedItemMatchesFavoritesFilter(superMarioOdyssey, filters);
//         expect(isMatched).toEqual(false);
//       });
//     });

//     describe('delegatedItemMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
//       it('returns true', () => {
//         const filters: IDelegatedItemFilters = {
//           ...createDefaultDelegatedItemFilters(),
//           favorites: false,
//         };

//         const isMatched = delegatedItemMatchesFavoritesFilter(superMarioOdyssey, filters);
//         expect(isMatched).toEqual(true);
//       });
//     });
//   });
// });

// describe('when the game is falsy', () => {
//   describe('delegatedItemMatchesSearchQuery(falsy, "Super")', () => {
//     it('returns false', () => {
//       const isMatched = delegatedItemMatchesSearchQuery(null, 'Super');
//       expect(isMatched).toEqual(false);
//     });
//   });

//   describe('delegatedItemMatchesUserFilter(falsy, "Nintendo Switch")', () => {
//     const nintendoSwitch: IDelegatedItemFilters = {
//       ...createDefaultDelegatedItemFilters(),
//       user: 'Nintendo Switch'
//     };

//     it('returns false', () => {
//       const isMatched = delegatedItemMatchesUserFilter(null, nintendoSwitch);
//       expect(isMatched).toEqual(false);
//     });
//   });
// });
