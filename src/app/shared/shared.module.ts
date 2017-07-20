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
  ListItemComponent,
  LoadingContainerComponent,
  SpinnerComponent
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
    ListItemComponent,
    LoadingContainerComponent,
    SpinnerComponent
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
    ItemListingComponent,
    LoadingContainerComponent,
    ListItemComponent,
    SpinnerComponent  
  ],
  providers: [
  ]
})
export class SharedModule { }
