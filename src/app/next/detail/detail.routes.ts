import { Routes } from '@angular/router';
import { NextDetailPageComponent } from './components';

export const detailRoutes: Routes = [
  {
    path: ':itemId',
    component: NextDetailPageComponent
  }
];


