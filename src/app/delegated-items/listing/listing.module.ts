import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoadingModule} from '../../loading/loading.module';
import {SharedModule} from '../../shared/shared.module';

import {
  DelegatedItemFiltersComponent,
  DelegatedItemListingComponent,
  DelegatedItemListingPageComponent,
  DelegatedItemListItemComponent,
  DelegatedItemSearchComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    SharedModule
  ],
  declarations: [
    DelegatedItemFiltersComponent,
    DelegatedItemListingComponent,
    DelegatedItemListingPageComponent,
    DelegatedItemListItemComponent,
    DelegatedItemSearchComponent,
  ],
  providers: []
})
export class DelegatedItemListingModule {

}
