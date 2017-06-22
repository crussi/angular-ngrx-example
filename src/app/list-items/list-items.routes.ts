import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {ListItemsContainerComponent} from './components';

export const listItemsRoutes: Routes = [
  {
    path: 'trash',
    redirectTo: 'listItems',
    pathMatch: 'full',
  },
  {
    path: 'listItems',
    component: ListItemsContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


