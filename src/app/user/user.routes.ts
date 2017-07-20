import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {UserContainerComponent} from './components';

export const userRoutes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


