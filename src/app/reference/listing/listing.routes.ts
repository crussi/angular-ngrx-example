import {Routes} from '@angular/router';
import {ReferenceListingPageComponent} from './components';
import { PreviousRouteRecorder } from '../../root/services';

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
    canDeactivate: [PreviousRouteRecorder]
  }
];


