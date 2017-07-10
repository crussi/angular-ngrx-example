import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {SomedayListingStore} from './item-listing.store';
import {createAction} from '../../../store/create-action';
import {SomedayService} from '../../services/items.service';

@Injectable()
export class SomedayListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(SomedayListingStore.RETRIEVE)
    .mergeMap(() => this.somedayService.getAll()
      .map(someday => createAction(SomedayListingStore.RETRIEVE_SUCCESS, { someday }))
      .catch(error => Observable.of(createAction(SomedayListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private somedayService: SomedayService
  ) {

  }

}
