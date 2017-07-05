import {Routes} from '@angular/router';

import {NextActionDetailPageComponent} from './components';

export const detailRoutes: Routes = [
  {
    path: ':nextActionId',
    component: NextActionDetailPageComponent
  }
];


