import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent, 
  ButtonGroupComponent, 
  ButtonToggleComponent,
  CardComponent,
  CardsComponent,
  FavoriteToggleComponent
} from './components';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
    ButtonToggleComponent,
    CardComponent,
    CardsComponent,
    FavoriteToggleComponent
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent,
    ButtonToggleComponent,
    CardComponent,
    CardsComponent,
    FavoriteToggleComponent
  ]
})
export class SharedModule { }
