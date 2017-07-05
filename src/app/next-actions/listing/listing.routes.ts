import {Routes} from '@angular/router';

import {NextActionListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: NextActionListingPageComponent
  }
];


