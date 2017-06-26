import {Routes} from '@angular/router';

import {videoGamesRoutes} from '../video-games/video-games.routes';
import {inboxItemsRoutes} from '../inbox-items/inbox-items.routes';
import { userProfilesRoutes } from '../user-profiles/user-profiles.routes';
import { listItemsRoutes } from '../list-items/list-items.routes';

// export const rootRoutes: Routes = [
//   ...videoGamesRoutes, ...inboxItemsRoutes
// ];

export const rootRoutes: Routes = [
  {
    path: '',
    redirectTo: 'inboxItems',
    pathMatch: 'full',
  },  
  ...inboxItemsRoutes, ...userProfilesRoutes,
  {
    path: 'listItems', 
    loadChildren: '../list-items/list-items.module#ListItemsModule'
  }  

  // ...inboxItemsRoutes, ...listItemsRoutes, ...userProfilesRoutes
];

// export const rootRoutes: Routes = [
//   ...listItemsRoutes
// ];


//pathMatch: 'full',