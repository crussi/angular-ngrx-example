import { Routes } from '@angular/router';
import { UserProfileDetailPageComponent } from './components';

export const detailRoutes: Routes = [
  {
    path: ':itemId',
    component: UserProfileDetailPageComponent
  }
];


