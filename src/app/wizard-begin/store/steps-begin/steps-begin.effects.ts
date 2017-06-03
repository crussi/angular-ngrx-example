import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';

import {StepsBeginStore} from './steps-begin.store';
import {createAction} from '../../../store/create-action';
import {StepsBeginService} from '../../services/steps-begin.service';

@Injectable()
export class StepsBeginEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(StepsBeginStore.RETRIEVE)
    .mergeMap(() => this.stepsBeginService.getAll()
      .map(step => createAction(StepsBeginStore.RETRIEVE_SUCCESS, { step }))
      .catch(error => Observable.of(createAction(StepsBeginStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private stepsBeginService: StepsBeginService
  ) {

  }

}
