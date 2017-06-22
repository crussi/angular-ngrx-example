// import { createDefaultListItemFilters, IListItemFilters } from '../list-item-listing';
// //import { IListItem } from './list-item.interface';
// import { IListItem } from '../../../shared/barrel';

// import {
//   listItemMatchesFavoritesFilter,
//   listItemMatchesUserFilter,
//   listItemMatchesSearchQuery
// } from './list-item.functions';

// describe('with Super Mario Odyssey', () => {
//   let superMarioOdyssey: IListItem;

//   beforeEach(() => {
//     superMarioOdyssey = {
//       id: '1',
//       title: 'Super Mario Odyssey',
//       description: 'description',
//       user: 'Nintendo Switch',
     
      
//     };
//   });

//   describe('listItemMatchesSearchQuery(superMarioOdyssey, "Super")', () => {
//     it('returns true', () => {
//       const isMatched = listItemMatchesSearchQuery(superMarioOdyssey, 'Super');
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('listItemMatchesSearchQuery(superMarioOdyssey, "Zelda")', () => {
//     it('returns false', () => {
//       const isMatched = listItemMatchesSearchQuery(superMarioOdyssey, 'Zelda');
//       expect(isMatched).toEqual(false);
//     });
//   });

//   describe('listItemMatchesSearchQuery(superMarioOdyssey, "")', () => {
//     it('returns true', () => {
//       const isMatched = listItemMatchesSearchQuery(superMarioOdyssey, '');
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('listItemMatchesSearchQuery(superMarioOdyssey, falsy)', () => {
//     it('returns true', () => {
//       const isMatched = listItemMatchesSearchQuery(superMarioOdyssey, null);
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('listItemMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
//     it('returns true', () => {
//       const nintendoSwitch: IListItemFilters = {
//         ...createDefaultListItemFilters(),
//         user: 'Nintendo Switch',
//       };

//       const isMatched = listItemMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('listItemMatchesUserFilter(superMarioOdyssey, nintendoSwitch)', () => {
//     it('returns true', () => {
//       const nintendoSwitch: IListItemFilters = {
//         ...createDefaultListItemFilters(),
//         user: 'Nintendo Switch',
//       };

//       const isMatched = listItemMatchesUserFilter(superMarioOdyssey, nintendoSwitch);
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('listItemMatchesUserFilter(superMarioOdyssey, pc)', () => {
//     it('returns false', () => {
//       const pc: IListItemFilters = {
//         ...createDefaultListItemFilters(),
//         user: 'PC',
//       };

//       const isMatched = listItemMatchesUserFilter(superMarioOdyssey, pc);
//       expect(isMatched).toEqual(false);
//     });
//   });

//   describe('listItemMatchesUserFilter(superMarioOdyssey, falsy)', () => {
//     it('returns true', () => {
//       const isMatched = listItemMatchesUserFilter(superMarioOdyssey, null);
//       expect(isMatched).toEqual(true);
//     });
//   });

//   describe('and it is favourited', () => {
//     beforeEach(() => {
//       superMarioOdyssey = { ...superMarioOdyssey, favorite: true };
//     });

//     describe('listItemMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
//       it('returns true', () => {
//         const showFavorites: IListItemFilters = {
//           ...createDefaultListItemFilters(),
//           favorites: true,
//         };

//         const isMatched = listItemMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
//         expect(isMatched).toEqual(true);
//       });
//     });

//     describe('listItemMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
//       it('returns true', () => {
//         const showFavorites: IListItemFilters = {
//           ...createDefaultListItemFilters(),
//           favorites: false,
//         };

//         const isMatched = listItemMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
//         expect(isMatched).toEqual(true);
//       });
//     });
//   });

//   describe('and it is not favourited', () => {
//     beforeEach(() => {
//       superMarioOdyssey = { ...superMarioOdyssey, favorite: false };
//     });

//     describe('listItemMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
//       it('returns false', () => {
//         const filters: IListItemFilters = {
//           ...createDefaultListItemFilters(),
//           favorites: true,
//         };

//         const isMatched = listItemMatchesFavoritesFilter(superMarioOdyssey, filters);
//         expect(isMatched).toEqual(false);
//       });
//     });

//     describe('listItemMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
//       it('returns true', () => {
//         const filters: IListItemFilters = {
//           ...createDefaultListItemFilters(),
//           favorites: false,
//         };

//         const isMatched = listItemMatchesFavoritesFilter(superMarioOdyssey, filters);
//         expect(isMatched).toEqual(true);
//       });
//     });
//   });
// });

// describe('when the game is falsy', () => {
//   describe('listItemMatchesSearchQuery(falsy, "Super")', () => {
//     it('returns false', () => {
//       const isMatched = listItemMatchesSearchQuery(null, 'Super');
//       expect(isMatched).toEqual(false);
//     });
//   });

//   describe('listItemMatchesUserFilter(falsy, "Nintendo Switch")', () => {
//     const nintendoSwitch: IListItemFilters = {
//       ...createDefaultListItemFilters(),
//       user: 'Nintendo Switch'
//     };

//     it('returns false', () => {
//       const isMatched = listItemMatchesUserFilter(null, nintendoSwitch);
//       expect(isMatched).toEqual(false);
//     });
//   });
// });
