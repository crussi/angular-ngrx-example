import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {ContactsContainerComponent} from './components';

export const contactsRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'contacts',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'contacts',
  //   component: ContactsContainerComponent,
  //   children: [
  //     ...listingRoutes,
  //     ...detailRoutes
  //   ]
  // }
  {
    path: '',
    component: ContactsContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }

];


