import {Routes} from '@angular/router';

import {DelegatedItemListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: DelegatedItemListingPageComponent
  }
];


