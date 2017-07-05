import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {NextActionsContainerComponent} from './components';
import {NextActionsService } from './services';
import { UserProfilesService } from '../user-profiles/services/user-profiles.service';
import {NextActionListingModule} from './listing/listing.module';
import {NextActionDetailModule} from './detail/detail.module';
import { NextActionListingEffects } from '../next-actions/store/effects';
import { UserProfileListingEffects } from '../user-profiles/store/effects';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NextActionListingModule,
    NextActionDetailModule,
    EffectsModule.run(UserProfileListingEffects),
    EffectsModule.run(NextActionListingEffects),
  ],
  declarations: [
    NextActionsContainerComponent,
  
  ],
  providers: [
    UserProfilesService,
    NextActionsService
  ]
})
export class NextActionsModule {

}
