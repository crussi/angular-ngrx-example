import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//import {LoadingModule} from '../../loading/loading.module';
import {SharedModule} from '../../shared/shared.module';

import {
  NextActionFiltersComponent,
  NextActionListingComponent,
  NextActionListingPageComponent,
  NextActionListItemComponent,
  NextActionSearchComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //LoadingModule,
    SharedModule
  ],
  declarations: [
    NextActionFiltersComponent,
    NextActionListingComponent,
    NextActionListingPageComponent,
    NextActionListItemComponent,
    NextActionSearchComponent,
  ],
  providers: []
})
export class NextActionListingModule {

}
