import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {DelegatedItemsContainerComponent} from './components';
import {DelegatedItemsService } from './services';
import { UserProfilesService } from '../user-profiles/services/user-profiles.service';
import {DelegatedItemListingModule} from './listing/listing.module';
import {DelegatedItemDetailModule} from './detail/detail.module';
import { DelegatedItemListingEffects } from '../delegated-items/store/effects';
import { UserProfileListingEffects } from '../user-profiles/store/effects';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DelegatedItemListingModule,
    DelegatedItemDetailModule,
    EffectsModule.run(UserProfileListingEffects),
    EffectsModule.run(DelegatedItemListingEffects),
  ],
  declarations: [
    DelegatedItemsContainerComponent,
  
  ],
  providers: [
    UserProfilesService,
    DelegatedItemsService
  ]
})
export class DelegatedItemsModule {

}
