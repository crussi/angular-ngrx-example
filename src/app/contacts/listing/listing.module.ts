import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//import {LoadingModule} from '../../loading/loading.module';
import {SharedModule} from '../../shared/shared.module';

import {
  //ContactFiltersComponent,
  ContactListingComponent,
  ContactListingPageComponent,
  ContactListItemComponent,
  ContactSearchComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //LoadingModule,
    SharedModule
  ],
  declarations: [
    //ContactFiltersComponent,
    ContactListingComponent,
    ContactListingPageComponent,
    ContactListItemComponent,
    ContactSearchComponent,
  ],
  providers: []
})
export class ContactListingModule {

}
