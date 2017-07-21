import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {UserProfilesContainerComponent} from './components';

export const userProfilesRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'userProfiles',
  //   pathMatch: 'full',
  // },
  {
    path: 'userProfiles',
    component: UserProfilesContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


