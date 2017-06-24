import { createAction } from '../../store/create-action';
import {usersReducer} from './users.reducer';
import {UsersStore} from './users.store';
import {createDefaultUsers} from '../interfaces/users.interface';

describe('usersReducer(falsy, unknownAction)', () => {
  const unknownAction = createAction('UNKNOWN');

  it('returns the default state', () => {
    const users = usersReducer(null, unknownAction);
    expect(users).toEqual(createDefaultUsers());
  });
});

describe('usersReducer(users, retrieveAction)', () => {
  const users = {...createDefaultUsers(), loadingError: 'Error' };
  const retrieveAction = createAction(UsersStore.RETRIEVE);

  it('sets isLoading to true', () => {
    const newUsers = usersReducer(users, retrieveAction);
    expect(newUsers.isLoading).toEqual(true);
  });

  it('clears out existing errors', () => {
    const newUsers = usersReducer(users, retrieveAction);
    expect(newUsers.loadingError).toBeNull();
  });
});

describe('usersReducer(users, retrieveSuccessAction)', () => {
  const users = {...createDefaultUsers(), isLoading: true};
  const retrieveSuccessAction = createAction(UsersStore.RETRIEVE_SUCCESS, {
    users: ['Nintendo Switch', 'PC']
  });

  it('set the users list', () => {
    const newUsers = usersReducer(users, retrieveSuccessAction);
    expect(newUsers.list).toEqual(['Nintendo Switch', 'PC']);
  });

  it('should set isLoading to false', () => {
    const newUsers = usersReducer(users, retrieveSuccessAction);
    expect(newUsers.isLoading).toEqual(false);
  });
});

describe('usersReducer(users, retrieveErrorAction)', () => {
  const users = {...createDefaultUsers(), isLoading: true};
  const retrieveErrorAction = createAction(UsersStore.RETRIEVE_ERROR, {
    error: 'Error Message'
  });

  it('set the loading error', () => {
    const newUsers = usersReducer(users, retrieveErrorAction);
    expect(newUsers.loadingError).toEqual('Error Message');
  });

  it('should set isLoading to false', () => {
    const newUsers = usersReducer(users, retrieveErrorAction);
    expect(newUsers.isLoading).toEqual(false);
  });
});
