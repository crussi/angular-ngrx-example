import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {
  UserProfileListingPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    UserProfileListingPageComponent,
  ],
  providers: []
})
export class UserProfileListingModule {

}