import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoadingModule} from '../../loading/loading.module';
import {
  CardComponent,
  CardsComponent,
  FavoriteToggleComponent,
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
    LoadingModule,
  ],
  declarations: [
    CardComponent,
    CardsComponent,
    FavoriteToggleComponent,
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
