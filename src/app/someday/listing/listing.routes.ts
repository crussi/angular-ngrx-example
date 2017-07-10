import {Routes} from '@angular/router';

import {SomedayListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: SomedayListingPageComponent
  }
];


