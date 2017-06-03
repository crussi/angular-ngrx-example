import {ILoadable} from '../../../loading/interfaces/loadable/loadable';

export interface ISteps extends ILoadable {
  readonly list: Array<string>;
}

export function createDefaultSteps(): ISteps {
  return {
    isLoading: false,
    loadingError: null,
    list: []
  };
}
