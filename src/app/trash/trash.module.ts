import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { TrashContainerComponent} from './components';
import { TrashService } from './services';
import { TrashListingModule} from './listing/listing.module';
import { TrashDetailModule} from './detail/detail.module';
import { TrashListingEffects } from './store';
import { TrashListingStore } from './store';
import { trashRoutes } from './trash.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(trashRoutes),
    TrashListingModule,
    TrashDetailModule,
    EffectsModule.run(TrashListingEffects),
  ],
  declarations: [
    TrashContainerComponent,

  ],
  providers: [
    TrashListingStore,
    TrashService
  ]
})
export class TrashModule {

}
