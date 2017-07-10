import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {ReferenceContainerComponent} from './components';

export const referenceRoutes: Routes = [
  {
    path: '',
    component: ReferenceContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


