import {Routes} from '@angular/router';
import {InboxItemListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: InboxItemListingPageComponent
  }
];


