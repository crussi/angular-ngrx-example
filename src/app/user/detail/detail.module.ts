import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {
  UserDetailComponent,
  UserDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    UserDetailComponent,
    UserDetailPageComponent,
  ],
  providers: []
})
export class UserDetailModule {

}
