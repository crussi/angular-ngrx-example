import {ILoadable} from '../../../loading/interfaces/loadable/loadable';

export interface IUsers extends ILoadable {
  readonly list: Array<string>;
}

export function createDefaultUsers(): IUsers {
  return {
    isLoading: false,
    loadingError: null,
    list: []
  };
}
