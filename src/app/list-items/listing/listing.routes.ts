import {Routes} from '@angular/router';

import {ListItemListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: ListItemListingPageComponent
  }
];


