import {Routes} from '@angular/router';

import {ListItemDetailPageComponent} from './components';

export const detailRoutes: Routes = [
  {
    path: ':listItemId',
    component: ListItemDetailPageComponent
  }
];


