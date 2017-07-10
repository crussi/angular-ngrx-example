import { ILoadable } from '../../../shared/barrel';
import {Step, StepEnum, StepState} from '../../../shared/barrel';


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

export interface IStepsState extends ILoadable {
  readonly list: Array<StepState>;
  readonly selectedStep: StepEnum;
}

export function createDefaultStepsState(): IStepsState {
  return {
    isLoading: false,
    loadingError: null,
    list: [],
    selectedStep: undefined
  };
}
