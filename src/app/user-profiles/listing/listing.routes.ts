import {Routes} from '@angular/router';

import {UserProfileListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: UserProfileListingPageComponent
  }
];


