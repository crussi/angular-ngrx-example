import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {ListItemsContainerComponent} from './components';

export const listItemsRoutes: Routes = [
  {
    path: '',
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


// {
//   path: 'listItems',
//     component: ListItemsContainerComponent,
//       children: [
//         ...listingRoutes,
//         ...detailRoutes
//       ]
// }

// {
//   path: 'listItems',
//     loadChildren: 'list-items/list-items.module#ListItemsContainerComponent',
//       children: [
//         ...listingRoutes,
//         ...detailRoutes
//       ]
// }
