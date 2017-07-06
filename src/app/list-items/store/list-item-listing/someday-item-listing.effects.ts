import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

import { ListItemListingStore } from './list-item-listing.store';
import { createAction } from '../../../store/create-action';
import { ListItemsService } from '../../services/list-items.service';
import { ListTypeEnum } from '../../models';

@Injectable()
export class SomedayItemListingEffects {

    @Effect()
    private retrieve$ = this.actions$
        .ofType(ListItemListingStore.RETRIEVE_SOMEDAY)
        .mergeMap(() => this.listItemsService.getAll(ListTypeEnum.Someday)
            .map(listItems => createAction(ListItemListingStore.RETRIEVE_SUCCESS_SOMEDAY, { listItems }))
            .catch(error => Observable.of(createAction(ListItemListingStore.RETRIEVE_ERROR_SOMEDAY, { error })))
        );

    constructor(
        private actions$: Actions,
        private listItemsService: ListItemsService
    ) {

    }

}
