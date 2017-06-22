import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoadingModule} from '../../loading/loading.module';
import {WizardBeginModule} from '../../wizard-begin/wizard-begin.module';
import {
  ButtonComponent,
  ButtonGroupComponent,
  ButtonToggleComponent,
  ListItemDetailComponent,
  ListItemDetailPageComponent,
  YouTubeVideoComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    WizardBeginModule
  ],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
    ButtonToggleComponent,
    ListItemDetailComponent,
    ListItemDetailPageComponent,
    YouTubeVideoComponent,
  ],
  providers: []
})
export class ListItemDetailModule {

}
