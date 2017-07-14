import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {
  DelegatedItemDetailComponent,
  DelegatedItemDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    DelegatedItemDetailComponent,
    DelegatedItemDetailPageComponent,
  ],
  providers: []
})
export class DelegatedItemDetailModule {

}
