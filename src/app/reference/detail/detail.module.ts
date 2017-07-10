import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {
  ReferenceDetailComponent,
  ReferenceDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ReferenceDetailComponent,
    ReferenceDetailPageComponent,
  ],
  providers: []
})
export class ReferenceDetailModule {

}
