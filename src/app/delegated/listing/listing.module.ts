import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {
  DelegatedItemListingPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    DelegatedItemListingPageComponent,
  ],
  providers: []
})
export class DelegatedItemListingModule {

}
