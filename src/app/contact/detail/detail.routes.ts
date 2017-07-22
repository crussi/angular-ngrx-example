import { Routes } from '@angular/router';
import { ContactDetailPageComponent } from './components';

export const detailRoutes: Routes = [
  {
    path: ':itemId',
    component: ContactDetailPageComponent
  }
];


