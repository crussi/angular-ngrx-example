import {Routes} from '@angular/router';

import {ListItemDetailPageComponent} from './components';

export const detailRoutes: Routes = [
  {
    path: 'trash/:listItemId',
    component: ListItemDetailPageComponent
  },
  {
    path: 'someday/:listItemId',
    component: ListItemDetailPageComponent
  }  
];


