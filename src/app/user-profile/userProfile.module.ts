import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { UserProfilesContainerComponent } from './components';
import { UserProfilesService } from './services';
import { UserProfileListingModule } from './listing/listing.module';
import { UserProfileDetailModule } from './detail/detail.module';
import { UserProfileListingEffects } from './store';
import { UserProfileListingStore } from './store'
import { userProfilesRoutes } from './userProfile.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userProfilesRoutes),
    UserProfileListingModule,
    UserProfileDetailModule,
    EffectsModule.run(UserProfileListingEffects),
  ],
  declarations: [
    UserProfilesContainerComponent,

  ],
  providers: [
    UserProfileListingStore,
    UserProfilesService
  ]
})
export class UserProfilesModule {

}
