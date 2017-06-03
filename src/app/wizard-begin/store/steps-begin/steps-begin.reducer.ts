import {Action} from '@ngrx/store';

import {
  createDefaultSteps,
  ISteps
} from '../../interfaces/steps-begin/steps-begin.interface';
import {StepsBeginStore} from './steps-begin.store';

export function stepsReducer(state: ISteps, action: Action): ISteps {
  state = state || createDefaultSteps();

  switch (action.type) {
    case StepsBeginStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case StepsBeginStore.RETRIEVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.steps
      };
    case StepsBeginStore.RETRIEVE_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.error
      };
    default:
      return state;
  }
}
