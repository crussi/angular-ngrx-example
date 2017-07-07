import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {ListItemsContainerComponent} from './components';

export const listItemsRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: 'listItems',
//     pathMatch: 'full',
//   },
  {
    path: '',
      component: ListItemsContainerComponent,
        children: [
          ...listingRoutes,
          ...detailRoutes
        ]
  }
];

