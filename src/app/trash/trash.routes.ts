import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {TrashContainerComponent} from './components';

export const trashRoutes: Routes = [
  {
    path: '',
    component: TrashContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


