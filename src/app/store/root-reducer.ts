import {combineReducers} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {localStorageSync} from 'ngrx-store-localstorage';
import {platformsReducer, videoGameListingReducer} from '../video-games/store/reducers';
import { inboxItemListingReducer } from '../inbox-items/store/reducers';
import { userProfileListingReducer } from '../user-profiles/store/reducers';
import { usersReducer } from '../users/store/users.reducer';
import { listItemListingReducer } from '../list-items/store/reducers';
import {stepsBeginReducer, stepsStateReducer} from '../wizard-begin/store/reducers';

//MAKE SURE YOU ADD THIS FOR EACH REDUCER!!!
const reducers = {
  platforms: platformsReducer,
  stepsBegin: stepsBeginReducer,
  stepsState: stepsStateReducer,
  users: usersReducer,
  router: routerReducer,
  videoGameListing: videoGameListingReducer,
  inboxItemListing: inboxItemListingReducer,
  userProfileListing: userProfileListingReducer,
  listItemListing: listItemListingReducer
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
