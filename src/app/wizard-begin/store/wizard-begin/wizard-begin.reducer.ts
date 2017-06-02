import { Action } from '@ngrx/store';

import { updateChildObject } from '../../../store/reducer-helpers';
import { WizardBeginStore } from './wizard-begin.store';
import { StepEnum, StepState  } from '../../../shared/barrel';
// import {
//   createDefaultInboxItemListing,
//   IInboxItemListing,
// } from '../../interfaces';
export interface State {
  readonly loaded: boolean;
  //readonly stepStates: StepState[];
  readonly selectedStep: StepEnum;
  readonly stepStates: Array<StepState>;
}

const initialState: State = {
  loaded: false,
  selectedStep: undefined,
  stepStates:[]
};

export function inboxItemListingReducer(state = initialState, action: Action): State 
{
  //state = state || createDefaultInboxItemListing();

  switch (action.type) {
    case WizardBeginStore.LOAD:
      const s = action.payload;
      let obj = Object.assign({}, state, {
        loaded: true,
        stepStates: s.map(ss => ss)
      });  
      //console.log('wizard LOAD new state',obj);
      return obj;
    case WizardBeginStore.STATECHANGE:
      const ss = action.payload;
      let name = StepEnum[ss.Step];
      let idx = state.stepStates.findIndex(function(el){return el.Step==name});
    default:
      return state;
  }
}
