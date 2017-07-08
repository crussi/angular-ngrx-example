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
  ItemDetailComponent
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
    ItemDetailComponent
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent,
    ButtonToggleComponent,
    CardComponent,
    CardsComponent,
    FavoriteToggleComponent,
    ItemsContainerComponent,
    ItemDetailComponent
  ]
})
export class SharedModule { }
