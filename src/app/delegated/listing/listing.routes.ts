import {Routes} from '@angular/router';
import {DelegatedItemListingPageComponent} from './components';
//import { ActivatedRouteRecorder, PreviousRouteRecorder } from '../../root/services';
import { PreviousRouteRecorder } from '../../root/services';

export const listingRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'listing',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'listing',
  //   component: DelegatedItemListingPageComponent
  // }
  {
    path: '',
    component: DelegatedItemListingPageComponent,
    //canActivate: [ActivatedRouteRecorder],
    canDeactivate: [PreviousRouteRecorder]
  }

];


