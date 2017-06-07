import {Action} from '@ngrx/store';
import {StepEnum, StepState} from '../../../shared/barrel';
import {createDefaultSteps, ISteps} from '../../interfaces/steps-begin/steps-begin.interface';
import {StepsBeginStore} from './steps-begin.store';

export function stepsBeginReducer(state: ISteps, action: Action): ISteps {
  state = state || createDefaultSteps();
  //console.log('steps-begin.reducer action.type',action.type);
  switch (action.type) {
    case StepsBeginStore.RETRIEVE:
      return {
        ...state,
        isLoading: true,
        loadingError: null
      };
    case StepsBeginStore.RETRIEVE_SUCCESS:
  //console.log('steps-begin.reducer found match StepsBeginStore.RETRIEVE_SUCCESS');
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
    // case StepsBeginStore.STATECHANGED:
    //     console.log('steps-begin.reducer StepsBeginStore.STATECHANGED',action.payload);
    //     const s = action.payload;
    //     let name = StepEnum[s.Step];
    //     let idx = state.stepStates.findIndex(function (el) { return el.Step == name });
    //     //console.log('idx',idx);
    //     //console.log('wizard.STATECHANGE payload',s);
    //     //console.log('wizard STATECHANGE prev state',state);
    //     let obj = Object.assign({}, state, {
    //       loaded: true,
    //       selectedStep: s.Transition.to,
    //       stepStates: state.stepStates.slice(0, idx).concat(new StepState(name, s.Value))
    //         .concat(state.stepStates.slice(idx + 1))
    //     }
    //     );  
    //     console.log('reducer STATECHANGED ',obj);
    //   return state;
    default:
      return state;
  }
}
