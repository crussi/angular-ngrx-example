import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {NextContainerComponent} from './components';

export const nextRoutes: Routes = [
  {
    path: '',
    component: NextContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


