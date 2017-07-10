import { Routes } from '@angular/router';
import { SomedayDetailPageComponent } from './components';

export const detailRoutes: Routes = [
  {
    path: ':itemId',
    component: SomedayDetailPageComponent
  }
];


