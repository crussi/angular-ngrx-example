import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {ContactContainerComponent} from './components';

export const contactRoutes: Routes = [
  {
    path: '',
    component: ContactContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


