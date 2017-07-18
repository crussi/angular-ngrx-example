import {Routes} from '@angular/router';
import {ContactListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: ContactListingPageComponent
  }
  // {
  //   path: '',
  //   component: ContactListingPageComponent
  // }  
];


