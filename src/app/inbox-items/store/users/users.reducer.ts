import {Action} from '@ngrx/store';

import {
  createDefaultUsers,
  IUsers
} from '../../interfaces/users/users.interface';
import {UsersStore} from './users.store';

export function usersReducer(state: IUsers, action: Action): IUsers {
  state = state || createDefaultUsers();

  switch (action.type) {
    case UsersStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case UsersStore.RETRIEVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.users
      };
    case UsersStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    default:
      return state;
  }
}
