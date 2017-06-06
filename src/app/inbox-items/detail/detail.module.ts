import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoadingModule} from '../../loading/loading.module';
import {WizardBeginModule} from '../../wizard-begin/wizard-begin.module';
import {
  ButtonComponent,
  ButtonGroupComponent,
  ButtonToggleComponent,
  InboxItemDetailComponent,
  InboxItemDetailPageComponent,
  YouTubeVideoComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LoadingModule,
    WizardBeginModule
  ],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
    ButtonToggleComponent,
    InboxItemDetailComponent,
    InboxItemDetailPageComponent,
    YouTubeVideoComponent,
  ],
  providers: []
})
export class InboxItemDetailModule {

}
