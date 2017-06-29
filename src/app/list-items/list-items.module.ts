import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//import {RouterModule} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {ListItemsContainerComponent} from './components';
import {ListItemsService} from './services';
import {ListItemListingModule} from './listing/listing.module';
import {ListItemDetailModule} from './detail/detail.module';
import { ListItemListingEffects, TrashItemListingEffects, SomedayItemListingEffects } from '../list-items/store/effects';

import { listingRoutes } from './listing/listing.routes';
import { detailRoutes } from './detail/detail.routes';


export const listItemsModuleRoutes: Routes = [
  /* configure routes here */
  {
    path: 'listItems',
    component: ListItemsContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(listItemsModuleRoutes),
    ListItemListingModule,
    ListItemDetailModule,
    //EffectsModule.run(UsersEffects),
    //EffectsModule.run(ListItemListingEffects),
    EffectsModule.run(TrashItemListingEffects),
    EffectsModule.run(SomedayItemListingEffects)
  ],
  //exports: [ListItemsContainerComponent],
  declarations: [
    ListItemsContainerComponent,
  
  ],
  providers: [
    //UsersService,
    ListItemsService
  ]
})
export class ListItemsModule {

}
