import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ISteps, IStepsState } from '../../interfaces/steps-begin/steps-begin.interface';
import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';
import { WizStateChange, StepEnum } from '../../../shared/barrel';

@Injectable()
export class StepsStateStore {

    public static RETRIEVE = 'STEPS_STATE_RETRIEVE';
    public static RETRIEVE_SUCCESS = 'STEPS_STATE_RETRIEVE_SUCCESS';
    public static RETRIEVE_ERROR = 'STEPS_STATE_RETRIEVE_ERROR';
    public static STATECHANGED = 'STEPS_STATE_STATECHANGED';

    constructor(private store: Store<IAppState>) {

    }

    // public getInboxItem(id: string): Observable<IInboxItem> {
    //   return this.getInboxItemListing()
    //     .map(inboxItemListing => getInboxItem(inboxItemListing, id));
    // }
    public getStepsState(): Observable<IStepsState> {
        return this.store.select(appState => appState.stepsState);
    }

    public retrieve() {
        this.store.dispatch(createAction(StepsStateStore.RETRIEVE));
    }

    public stateChanged(stateChanged: WizStateChange) {
        this.store.dispatch(createAction(StepsStateStore.STATECHANGED, stateChanged));
    }
    
    // public getVideoGame(id: string): Observable<IVideoGame> {
    //     return this.getVideoGameListing()
    //         .map(videoGameListing => getVideoGame(videoGameListing, id));
    // }

    public getState(step:StepEnum): Observable<IStepsState> {
        console.log('steps-state.store getState step:',step);
        this.getStepsState().map(stepsState => {console.log('inside getState',stepsState[step]);});
        return this.getStepsState()
            .map(stepsState => stepsState[step]);
    }    
}
