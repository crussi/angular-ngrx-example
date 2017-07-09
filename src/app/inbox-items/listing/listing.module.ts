import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//import {LoadingModule} from '../../loading/loading.module';
import {SharedModule} from '../../shared/shared.module';

import {
  InboxItemFiltersComponent,
  InboxItemListingComponent,
  InboxItemListingPageComponent,
  InboxItemListItemComponent,
  InboxItemSearchComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //LoadingModule,
    SharedModule
  ],
  declarations: [
    InboxItemFiltersComponent,
    InboxItemListingComponent,
    InboxItemListingPageComponent,
    InboxItemListItemComponent,
    InboxItemSearchComponent,
  ],
  providers: []
})
export class InboxItemListingModule {

}
