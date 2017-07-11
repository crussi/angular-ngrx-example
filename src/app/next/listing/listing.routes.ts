import {Routes} from '@angular/router';

import {NextListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: NextListingPageComponent
  }
];


