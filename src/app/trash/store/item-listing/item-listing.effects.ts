import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {TrashListingStore} from './item-listing.store';
import {createAction} from '../../../store/create-action';
import {TrashService} from '../../services/items.service';

@Injectable()
export class TrashListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(TrashListingStore.RETRIEVE)
    .mergeMap(() => this.trashService.getAll()
      .map(trash => createAction(TrashListingStore.RETRIEVE_SUCCESS, { trash }))
      .catch(error => Observable.of(createAction(TrashListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private trashService: TrashService
  ) {

  }

}
