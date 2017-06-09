import { Action } from '@ngrx/store';
import { StepEnum, StepState } from '../../../shared/barrel';
import { createDefaultStepsState, IStepsState } from '../../interfaces/steps-begin/steps-begin.interface';
import { StepsStateStore } from './steps-state.store';

export function stepsStateReducer(state: IStepsState, action: Action): IStepsState {
    state = state || createDefaultStepsState();
    //console.log('steps-state.reducer action.type', action.type);
    switch (action.type) {
        case StepsStateStore.RETRIEVE:
            return {
                ...state,
                isLoading: true,
                loadingError: null
            };
        case StepsStateStore.RETRIEVE_SUCCESS:
            //console.log('*** steps-state.reducer found match StepsStateStore.RETRIEVE_SUCCESS', action.payload.stepsstate);
            return {
                ...state,
                isLoading: false,
                list: action.payload.stepsstate
            };
        case StepsStateStore.RETRIEVE_ERROR:
            return {
                ...state,
                isLoading: false,
                loadingError: action.payload.error
            };
        case StepsStateStore.STATECHANGED:
            //console.log('steps-state.reducer StepsStateStore.STATECHANGED', action.payload);
            const s = action.payload;
            let name = StepEnum[s.Step];
            let idx = state.list.findIndex(function (el) { return el.Step == name });
            //console.log('idx',idx);
            //console.log('wizard.STATECHANGE payload',s);
            //console.log('wizard STATECHANGE prev state',state);
            let obj = Object.assign({}, state, {
                selectedStep: s.Transition.to,
                list: state.list.slice(0, idx).concat(new StepState(name, s.Value))
                    .concat(state.list.slice(idx + 1))
            }
            );
            //console.log('+*+*+* reducer STATECHANGED +*+*+*', obj);
            return obj;
        default:
            return state;
    }
}
