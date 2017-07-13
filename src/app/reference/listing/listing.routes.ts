import {Routes} from '@angular/router';
import {ReferenceListingPageComponent} from './components';

export const listingRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'listing',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'listing',
  //   component: ReferenceListingPageComponent
  // }
  {
    path: '',
    component: ReferenceListingPageComponent,
  }
];


