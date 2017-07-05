import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {NextActionsContainerComponent} from './components';

export const nextActionsRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'nextActions',
  //   pathMatch: 'full',
  // },
  {
    path: 'nextActions',
    component: NextActionsContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


