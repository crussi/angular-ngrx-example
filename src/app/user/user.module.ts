import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { UserContainerComponent} from './components';
import { UserService } from './services';
import { UserListingModule} from './listing/listing.module';
import { UserDetailModule} from './detail/detail.module';
import { UserListingEffects } from './store';
import { UserListingStore } from './store';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userRoutes),
    UserListingModule,
    UserDetailModule,
    EffectsModule.run(UserListingEffects),
  ],
  declarations: [
    UserContainerComponent,

  ],
  providers: [
    UserListingStore,
    UserService
  ]
})
export class UserModule {

}
