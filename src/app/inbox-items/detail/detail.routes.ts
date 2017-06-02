import {Routes} from '@angular/router';

import {InboxItemDetailPageComponent} from './components';

export const detailRoutes: Routes = [
  {
    path: ':inboxItemId',
    component: InboxItemDetailPageComponent
  }
];


