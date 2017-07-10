import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {SomedayContainerComponent} from './components';

export const somedayRoutes: Routes = [
  {
    path: '',
    component: SomedayContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


