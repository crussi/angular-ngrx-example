import {Routes} from '@angular/router';
import {UserProfileListingPageComponent} from './components';
import { PreviousRouteRecorder } from '../../root/services';

export const listingRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'listing',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'listing',
  //   component: UserProfileListingPageComponent
  // }
  {
    path: 'listing',
    component: UserProfileListingPageComponent,
    canDeactivate: [PreviousRouteRecorder]
  }  
];


