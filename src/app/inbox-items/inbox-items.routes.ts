import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {InboxItemsContainerComponent} from './components';

export const inboxItemsRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'inboxItems',
  //   pathMatch: 'full',
  // },
  {
    path: 'inboxItems',
    component: InboxItemsContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


