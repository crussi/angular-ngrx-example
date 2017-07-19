import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {
  ProjectDetailComponent,
  ProjectDetailPageComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ProjectDetailComponent,
    ProjectDetailPageComponent,
  ],
  providers: []
})
export class ProjectDetailModule {

}
