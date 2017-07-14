import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {UserProfilesContainerComponent} from './components';

export const userProfilesRoutes: Routes = [
  {
    path: '',
    component: UserProfilesContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


