import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { ReferenceContainerComponent} from './components';
import { ReferenceService } from './services';
import { ReferenceListingModule} from './listing/listing.module';
import { ReferenceDetailModule} from './detail/detail.module';
import { ReferenceListingEffects } from './store';
import { ReferenceListingStore } from './store'
import { referenceRoutes } from './reference.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(referenceRoutes),
    ReferenceListingModule,
    ReferenceDetailModule,
    EffectsModule.run(ReferenceListingEffects),
  ],
  declarations: [
    ReferenceContainerComponent,

  ],
  providers: [
    ReferenceListingStore,
    ReferenceService
  ]
})
export class ReferenceModule {

}
