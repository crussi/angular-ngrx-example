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
export class ReferenceItemListingEffects {

    @Effect()
    private retrieve$ = this.actions$
        .ofType(ListItemListingStore.RETRIEVE_REFERENCE)
        .mergeMap(() => this.listItemsService.getAll(ListTypeEnum.Reference)
            .map(listItems => createAction(ListItemListingStore.RETRIEVE_SUCCESS_REFERENCE, { listItems }))
            .catch(error => Observable.of(createAction(ListItemListingStore.RETRIEVE_ERROR_REFERENCE, { error })))
        );

    constructor(
        private actions$: Actions,
        private listItemsService: ListItemsService
    ) {

    }

}
