import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//import {RouterModule} from '@angular/router';
import { RouterModule } from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {ListItemsContainerComponent} from './components';
import {ListItemsService} from './services';
import {ListItemListingModule} from './listing/listing.module';
import {ListItemDetailModule} from './detail/detail.module';
import { TrashItemListingEffects, SomedayItemListingEffects, ReferenceItemListingEffects } from '../list-items/store/effects';
import { ListItemListingStore } from './store/stores';
// import { listingRoutes } from './listing/listing.routes';
// import { detailRoutes } from './detail/detail.routes';
import { listItemsRoutes } from './list-items.routes';

// export const listItemsModuleRoutes: Routes = [
//   /* configure routes here */
//   {
//     path: 'listItems',
//     component: ListItemsContainerComponent,
//     children: [
//       ...listingRoutes,
//       ...detailRoutes
//     ]
//   }  
// ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(listItemsRoutes),
    ListItemListingModule,
    ListItemDetailModule,
    //EffectsModule.run(UsersEffects),
    //EffectsModule.run(ListItemListingEffects),
    //LOOK here to 
    EffectsModule.run(TrashItemListingEffects),
    EffectsModule.run(SomedayItemListingEffects),
    EffectsModule.run(ReferenceItemListingEffects)
  ],
  //exports: [ListItemsContainerComponent],
  declarations: [
    ListItemsContainerComponent,
  
  ],
  providers: [
    //UsersService,
    ListItemListingStore,
    ListItemsService
  ]
})
export class ListItemsModule {

}
