import { Routes } from '@angular/router';
import { ReferenceDetailPageComponent } from './components';

export const detailRoutes: Routes = [
  {
    path: ':itemId',
    component: ReferenceDetailPageComponent
  }
];


