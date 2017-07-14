import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { InboxItemsContainerComponent } from './components';
import { InboxItemsService } from './services';
import { UserProfilesService } from '../user-profile/services/items.service';
import { InboxItemListingModule } from './listing/listing.module';
import { InboxItemDetailModule } from './detail/detail.module';
import { InboxItemListingEffects } from '../inbox-items/store/effects';
import { UserProfileListingEffects } from '../user-profile/store/effects';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InboxItemListingModule,
    InboxItemDetailModule,
    EffectsModule.run(UserProfileListingEffects),
    EffectsModule.run(InboxItemListingEffects),
  ],
  declarations: [
    InboxItemsContainerComponent,
  
  ],
  providers: [
    UserProfilesService,
    InboxItemsService
  ]
})
export class InboxItemsModule {

}
