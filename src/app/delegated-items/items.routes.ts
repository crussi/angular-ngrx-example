import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {DelegatedItemsContainerComponent} from './components';

export const delegatedItemsRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'delegatedItems',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: DelegatedItemsContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


