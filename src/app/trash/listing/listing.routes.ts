import {Routes} from '@angular/router';
import {TrashListingPageComponent} from './components';

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
    component: TrashListingPageComponent
  }  
];


