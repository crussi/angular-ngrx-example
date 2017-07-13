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
//import { PreviousRouteRecorder } from './services/previous-route-recorder.service';

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
    SpinnerComponent  
  ],
  providers: [
    //PreviousRouteRecorder
  ]
})
export class SharedModule { }
