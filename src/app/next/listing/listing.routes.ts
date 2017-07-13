import {Routes} from '@angular/router';
import {NextListingPageComponent} from './components';
import { PreviousRouteRecorder } from '../../root/services';

export const listingRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'listing',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'listing',
  //   component: NextListingPageComponent
  // }
  {
    path: '',
    component: NextListingPageComponent,
    canDeactivate: [PreviousRouteRecorder]
  }  
];


