import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { DelegatedItemsContainerComponent} from './components';
import { DelegatedItemsService } from './services';
import { DelegatedItemListingModule} from './listing/listing.module';
import { DelegatedItemDetailModule} from './detail/detail.module';
import { DelegatedItemListingEffects } from './store/effects';
import { DelegatedItemListingStore } from './store/stores'
import { delegatedItemsRoutes } from './delegated.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(delegatedItemsRoutes),
    DelegatedItemListingModule,
    DelegatedItemDetailModule,
    EffectsModule.run(DelegatedItemListingEffects),
  ],
  declarations: [
    DelegatedItemsContainerComponent,

  ],
  providers: [
    //UserProfilesService,
    DelegatedItemListingStore,
    DelegatedItemsService
  ]
})
export class DelegatedItemsModule {

}
