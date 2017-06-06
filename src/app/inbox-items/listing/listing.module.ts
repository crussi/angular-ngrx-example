import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoadingModule} from '../../loading/loading.module';
import {
  CardComponent,
  CardsComponent,
  FavoriteToggleComponent,
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
    LoadingModule,
  ],
  declarations: [
    CardComponent,
    CardsComponent,
    FavoriteToggleComponent,
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
