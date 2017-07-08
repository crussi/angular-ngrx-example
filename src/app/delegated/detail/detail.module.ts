import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../../loading/loading.module';
import { SharedModule } from '../../shared/shared.module';

import {
  DelegatedItemDetailComponent,
  DelegatedItemDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
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
