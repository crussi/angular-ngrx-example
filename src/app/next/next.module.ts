import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { NextContainerComponent} from './components';
import { NextService } from './services';
import { NextListingModule} from './listing/listing.module';
import { NextDetailModule} from './detail/detail.module';
import { NextListingEffects } from './store';
import { NextListingStore } from './store'
import { nextRoutes } from './next.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(nextRoutes),
    NextListingModule,
    NextDetailModule,
    EffectsModule.run(NextListingEffects),
  ],
  declarations: [
    NextContainerComponent,

  ],
  providers: [
    NextListingStore,
    NextService
  ]
})
export class NextModule {

}
