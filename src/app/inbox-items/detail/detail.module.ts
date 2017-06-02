import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoadingModule} from '../../loading/loading.module';

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
    RouterModule,
    LoadingModule,
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
