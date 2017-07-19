import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import {ProjectListingStore} from './item-listing.store';
import {createAction} from '../../../store/create-action';
import {ProjectService} from '../../services/items.service';

@Injectable()
export class ProjectListingEffects {

  @Effect()
  private retrieve$ = this.actions$
    .ofType(ProjectListingStore.RETRIEVE)
    .mergeMap(() => this.projectService.getAll()
      .map(project => createAction(ProjectListingStore.RETRIEVE_SUCCESS, { project }))
      .catch(error => Observable.of(createAction(ProjectListingStore.RETRIEVE_ERROR, { error })))
    );

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {

  }

}
