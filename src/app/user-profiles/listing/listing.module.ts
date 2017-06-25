import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoadingModule} from '../../loading/loading.module';
import {SharedModule} from '../../shared/shared.module';

import {
  UserProfileFiltersComponent,
  UserProfileListingComponent,
  UserProfileListingPageComponent,
  UserProfileListItemComponent,
  UserProfileSearchComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    SharedModule
  ],
  declarations: [
    UserProfileFiltersComponent,
    UserProfileListingComponent,
    UserProfileListingPageComponent,
    UserProfileListItemComponent,
    UserProfileSearchComponent,
  ],
  providers: []
})
export class UserProfileListingModule {

}
