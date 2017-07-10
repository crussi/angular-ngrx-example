import {Routes} from '@angular/router';
import {inboxItemsRoutes} from '../inbox-items/inbox-items.routes';
import { nextActionsRoutes } from '../next-actions/next-actions.routes';
//import { delegatedItemsRoutes } from '../delegated-items/delegated-items.routes';
import { userProfilesRoutes } from '../user-profiles/user-profiles.routes';

export const rootRoutes: Routes = [
  {
    path: '',
    redirectTo: 'inboxItems',
    pathMatch: 'full',
  },  
  // ...inboxItemsRoutes, ...nextActionsRoutes, ...delegatedItemsRoutes, ...userProfilesRoutes,
  ...inboxItemsRoutes, ...nextActionsRoutes, ...userProfilesRoutes,
  {
    path: 'delegatedItems', 
    loadChildren: '../delegated/delegated.module#DelegatedItemsModule'
  },
  {
    path: 'trash',
    loadChildren: '../trash/trash.module#TrashModule'
  },
  {
    path: 'someday',
    loadChildren: '../someday/someday.module#SomedayModule'
  },
  {
    path: 'reference',
    loadChildren: '../reference/reference.module#ReferenceModule'
  }
  // {
  //   path: 'listItems',
  //   loadChildren: '../list-items/list-items.module#ListItemsModule'
  // }     

  // ...inboxItemsRoutes, ...listItemsRoutes, ...userProfilesRoutes
];

// export const rootRoutes: Routes = [
//   ...listItemsRoutes
// ];


//pathMatch: 'full',