import { Routes } from '@angular/router';
import { UserDetailPageComponent } from './components';

export const detailRoutes: Routes = [
  {
    path: ':itemId',
    component: UserDetailPageComponent
  }
];


