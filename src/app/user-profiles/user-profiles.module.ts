import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {UserProfilesContainerComponent} from './components';
import {UserProfilesService } from './services';
import {UserProfileListingModule} from './listing/listing.module';
import {UserProfileDetailModule} from './detail/detail.module';
import { UserProfileListingEffects } from '../user-profiles/store/effects';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserProfileListingModule,
    UserProfileDetailModule,
    EffectsModule.run(UserProfileListingEffects),
  ],
  declarations: [
    UserProfilesContainerComponent,
  
  ],
  providers: [
    UserProfilesService
  ]
})
export class UserProfilesModule {

}
