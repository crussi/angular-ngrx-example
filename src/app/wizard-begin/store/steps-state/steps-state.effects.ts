import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { StepsStateStore } from './steps-state.store';
import { createAction } from '../../../store/create-action';
import { StepsBeginService } from '../../services/steps-begin.service';

@Injectable()
export class StepsStateEffects {

    @Effect()
    private retrieve$ = this.actions$
        .ofType(StepsStateStore.RETRIEVE)
        .mergeMap(() => this.stepsBeginService.getStepStates()
            .map(stepsstate => createAction(StepsStateStore.RETRIEVE_SUCCESS, { stepsstate }))
            .catch(error => Observable.of(createAction(StepsStateStore.RETRIEVE_ERROR, { error })))
        );

    constructor(
        private actions$: Actions,
        private stepsBeginService: StepsBeginService
    ) {

    }

}
