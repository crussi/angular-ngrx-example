import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {UserProfilesContainerComponent} from './components';
import {UserProfilesService } from './services';
import {UsersService} from '../users/services/users.service';
import {UserProfileListingModule} from './listing/listing.module';
import {UserProfileDetailModule} from './detail/detail.module';
import { UserProfileListingEffects } from '../user-profiles/store/effects';
import { UsersEffects} from '../users/store/users.effects';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserProfileListingModule,
    UserProfileDetailModule,
    EffectsModule.run(UsersEffects),
    EffectsModule.run(UserProfileListingEffects),
  ],
  declarations: [
    UserProfilesContainerComponent,
  
  ],
  providers: [
    UsersService,
    UserProfilesService
  ]
})
export class UserProfilesModule {

}
