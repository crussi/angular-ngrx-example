import {Routes} from '@angular/router';

import {ListItemListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'trash',
    pathMatch: 'full',
  },
  {
    path: 'trash',
    component: ListItemListingPageComponent
  },
  {
    path: 'someday',
    component: ListItemListingPageComponent
  },
  {
    path: 'reference',
    component: ListItemListingPageComponent
  }      
];


