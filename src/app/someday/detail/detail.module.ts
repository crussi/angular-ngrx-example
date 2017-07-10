import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {
  SomedayDetailComponent,
  SomedayDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    SomedayDetailComponent,
    SomedayDetailPageComponent,
  ],
  providers: []
})
export class SomedayDetailModule {

}
