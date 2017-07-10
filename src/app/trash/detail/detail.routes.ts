import { Routes } from '@angular/router';
import { TrashDetailPageComponent } from './components';

export const detailRoutes: Routes = [
  {
    path: ':itemId',
    component: TrashDetailPageComponent
  }
];


