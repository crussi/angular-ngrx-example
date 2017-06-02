import {Routes} from '@angular/router';

import {videoGamesRoutes} from '../video-games/video-games.routes';
import {inboxItemsRoutes} from '../inbox-items/inbox-items.routes';

// export const rootRoutes: Routes = [
//   ...videoGamesRoutes, ...inboxItemsRoutes
// ];

export const rootRoutes: Routes = [
  ...inboxItemsRoutes
];
