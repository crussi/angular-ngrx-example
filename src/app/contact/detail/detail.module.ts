import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {
  ContactDetailComponent,
  ContactDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ContactDetailComponent,
    ContactDetailPageComponent,
  ],
  providers: []
})
export class ContactDetailModule {

}
