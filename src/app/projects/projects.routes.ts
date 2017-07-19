import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {ProjectContainerComponent} from './components';

export const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


