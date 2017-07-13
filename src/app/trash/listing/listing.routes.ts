import {Routes} from '@angular/router';
import {TrashListingPageComponent} from './components';
import { PreviousRouteRecorder } from '../../root/services';

export const listingRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'listing',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'listing',
  //   component: TrashListingPageComponent,
  //   canDeactivate: [PreviousRouteRecorder]
  // }
  {
    path: '',
    component: TrashListingPageComponent,
    canDeactivate: [PreviousRouteRecorder]
  }  
];


