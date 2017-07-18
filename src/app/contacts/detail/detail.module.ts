import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//import {LoadingModule} from '../../loading/loading.module';
import {WizardBeginModule} from '../../wizard-begin/wizard-begin.module';
import {SharedModule} from '../../shared/shared.module';

import {
  ContactDetailComponent,
  ContactDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //LoadingModule,
    WizardBeginModule,
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
