import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { InboxItemsContainerComponent } from './components';
import { InboxItemsService } from './services';
import { UserService } from '../user/services/items.service';
import { InboxItemListingModule } from './listing/listing.module';
import { InboxItemDetailModule } from './detail/detail.module';
import { InboxItemListingEffects } from '../inbox-items/store/effects';
import { UserListingEffects } from '../user/store/effects';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InboxItemListingModule,
    InboxItemDetailModule,
    EffectsModule.run(UserListingEffects),
    EffectsModule.run(InboxItemListingEffects),
  ],
  declarations: [
    InboxItemsContainerComponent,
  
  ],
  providers: [
    UserService,
    InboxItemsService
  ]
})
export class InboxItemsModule {

}
