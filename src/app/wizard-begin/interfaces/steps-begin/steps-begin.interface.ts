import {ILoadable} from '../../../loading/interfaces/loadable/loadable';
import {Step} from '../../../shared/barrel';
export interface ISteps extends ILoadable {
  readonly list: Array<Step>;
}

export function createDefaultSteps(): ISteps {
  return {
    isLoading: false,
    loadingError: null,
    list: []
  };
}
