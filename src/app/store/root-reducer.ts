import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { localStorageSync } from 'ngrx-store-localstorage';
import { inboxItemListingReducer } from '../inbox-items/store/reducers';
import { nextListingReducer } from '../next/store/reducers';
import { delegatedItemListingReducer } from '../delegated/store/reducers';
import { userListingReducer } from '../user/store/reducers';
import { contactListingReducer } from '../contact/store/reducers';
import { projectListingReducer } from '../projects/store/reducers';
import { trashListingReducer } from '../trash/store/reducers';
import { somedayListingReducer } from '../someday/store/reducers';
import { referenceListingReducer } from '../reference/store/reducers';
import { stepsBeginReducer, stepsStateReducer } from '../wizard-begin/store/reducers';

//MAKE SURE YOU ADD THIS FOR EACH REDUCER!!!
//LOOK HERE 
const reducers = {
  stepsBegin: stepsBeginReducer,
  stepsState: stepsStateReducer,
  router: routerReducer,
  inboxItemListing: inboxItemListingReducer,
  nextListing: nextListingReducer,
  delegatedItemListing: delegatedItemListingReducer,
  userListing: userListingReducer,
  projectListing: projectListingReducer,
  contactListing: contactListingReducer,
  trashListing: trashListingReducer,
  somedayListing: somedayListingReducer,
  referenceListing: referenceListingReducer
};

const localStorageState = {
  keys: ['platforms','steps-begin']
};

export function rootReducer(state: any, action: any) {
  return compose(
    storeLogger({
      collapsed: true
    }),
    localStorageSync(localStorageState),
    combineReducers
  )(reducers)(state, action);
}
