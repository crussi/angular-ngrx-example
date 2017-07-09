import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ButtonComponent, 
  ButtonGroupComponent, 
  ButtonToggleComponent,
  CardComponent,
  CardsComponent,
  FavoriteToggleComponent,
  ItemsContainerComponent,
  ItemDetailComponent,
  UserFilterComponent,
  SearchComponent,
  ItemListingComponent,
  ListItemComponent
} from './components';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
    ButtonToggleComponent,
    CardComponent,
    CardsComponent,
    FavoriteToggleComponent,
    ItemsContainerComponent,
    ItemDetailComponent,
    UserFilterComponent,
    SearchComponent,
    ItemListingComponent,
    ListItemComponent
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent,
    ButtonToggleComponent,
    CardComponent,
    CardsComponent,
    FavoriteToggleComponent,
    ItemsContainerComponent,
    ItemDetailComponent,
    UserFilterComponent,
    SearchComponent,
    ItemListingComponent
  ]
})
export class SharedModule { }
