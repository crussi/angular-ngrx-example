import {Routes} from '@angular/router';
import {inboxItemsRoutes} from '../inbox-items/inbox-items.routes';
import { userProfilesRoutes } from '../user-profiles/user-profiles.routes';

export const rootRoutes: Routes = [
  {
    path: '',
    redirectTo: 'inboxItems',
    pathMatch: 'full',
  },  
  ...inboxItemsRoutes, ...userProfilesRoutes,
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
  },
  {
    path: 'next',
    loadChildren: '../next/next.module#NextModule'
  },
  {
    path: 'contacts',
    loadChildren: '../contacts/contacts.module#ContactsModule'
  },
  {
    path: 'projects',
    loadChildren: '../projects/projects.module#ProjectsModule'
  }    
];
