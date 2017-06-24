import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {InboxItemsContainerComponent} from './components';
import {InboxItemsService } from './services';
import {UsersService} from '../users/services/users.service';
import {InboxItemListingModule} from './listing/listing.module';
import {InboxItemDetailModule} from './detail/detail.module';
import { InboxItemListingEffects } from '../inbox-items/store/effects';
import { UsersEffects} from '../users/store/users.effects';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InboxItemListingModule,
    InboxItemDetailModule,
    EffectsModule.run(UsersEffects),
    EffectsModule.run(InboxItemListingEffects),
  ],
  declarations: [
    InboxItemsContainerComponent,
  
  ],
  providers: [
    UsersService,
    InboxItemsService
  ]
})
export class InboxItemsModule {

}
