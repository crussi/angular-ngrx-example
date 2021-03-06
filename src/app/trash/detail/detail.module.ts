import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {
  TrashDetailComponent,
  TrashDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    TrashDetailComponent,
    TrashDetailPageComponent,
  ],
  providers: []
})
export class TrashDetailModule {

}
