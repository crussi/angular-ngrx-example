import {Routes} from '@angular/router';

import {DelegatedItemDetailPageComponent} from './components';

export const detailRoutes: Routes = [
  {
    path: ':delegatedItemId',
    component: DelegatedItemDetailPageComponent
  }
];


