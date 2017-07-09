import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//import {LoadingModule} from '../../loading/loading.module';
import {SharedModule} from '../../shared/shared.module';

import {
  ListItemFiltersComponent,
  ListItemListingComponent,
  ListItemListingPageComponent,
  ListItemListItemComponent,
  ListItemSearchComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //LoadingModule,
    SharedModule
  ],
  declarations: [
    ListItemFiltersComponent,
    ListItemListingComponent,
    ListItemListingPageComponent,
    ListItemListItemComponent,
    ListItemSearchComponent,
  ],
  providers: []
})
export class ListItemListingModule {

}
