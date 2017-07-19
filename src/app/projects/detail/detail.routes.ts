import { Routes } from '@angular/router';
import { ProjectDetailPageComponent } from './components';

export const detailRoutes: Routes = [
  {
    path: ':itemId',
    component: ProjectDetailPageComponent
  }
];


