import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {
  NextDetailComponent,
  NextDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    NextDetailComponent,
    NextDetailPageComponent,
  ],
  providers: []
})
export class NextDetailModule {

}
