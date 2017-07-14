import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { SomedayContainerComponent} from './components';
import { SomedayService } from './services';
import { SomedayListingModule} from './listing/listing.module';
import { SomedayDetailModule} from './detail/detail.module';
import { SomedayListingEffects } from './store';
import { SomedayListingStore } from './store'
import { somedayRoutes } from './someday.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(somedayRoutes),
    SomedayListingModule,
    SomedayDetailModule,
    EffectsModule.run(SomedayListingEffects),
  ],
  declarations: [
    SomedayContainerComponent,

  ],
  providers: [
    SomedayListingStore,
    SomedayService
  ]
})
export class SomedayModule {

}
