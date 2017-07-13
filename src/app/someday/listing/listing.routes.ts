import {Routes} from '@angular/router';
import {SomedayListingPageComponent} from './components';
import { PreviousRouteRecorder } from '../../root/services';

export const listingRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'listing',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'listing',
  //   component: SomedayListingPageComponent
  // }
  {
    path: '',
    component: SomedayListingPageComponent,
    canDeactivate: [PreviousRouteRecorder]
  }  
];


