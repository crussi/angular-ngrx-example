import { Routes } from '@angular/router';
import { inboxItemsRoutes } from '../inbox-items/inbox-items.routes';
import { userRoutes } from '../user/user.routes';

export const rootRoutes: Routes = [
  {
    path: '',
    redirectTo: 'inboxItems',
    pathMatch: 'full',
  },  
  ...inboxItemsRoutes, ...userRoutes, 
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
    path: 'contact',
    loadChildren: '../contact/contact.module#ContactModule'
  },
  {
    path: 'projects',
    loadChildren: '../projects/projects.module#ProjectsModule'
  }    
];
