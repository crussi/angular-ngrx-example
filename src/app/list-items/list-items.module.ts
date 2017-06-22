import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';

import {ListItemsContainerComponent} from './components';

//import {UsersService, ListItemsService} from './services';
import {ListItemsService} from './services';
import {ListItemListingModule} from './listing/listing.module';
import {ListItemDetailModule} from './detail/detail.module';
//import {UsersEffects, ListItemListingEffects} from '../list-items/store/effects';
import { ListItemListingEffects } from '../list-items/store/effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ListItemListingModule,
    ListItemDetailModule,
    //EffectsModule.run(UsersEffects),
    EffectsModule.run(ListItemListingEffects),
  ],
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
