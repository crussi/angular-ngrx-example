import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';

//import {VideoGamesContainerComponent} from './components';

import {StepsBeginService} from './services';
//import {VideoGameListingModule} from './listing/listing.module';
//import {VideoGameDetailModule} from './detail/detail.module';
import {StepsBeginEffects} from './store/effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //VideoGameListingModule,
    //VideoGameDetailModule,
    EffectsModule.run(StepsBeginEffects),
  ],
  declarations: [
    //VideoGamesContainerComponent
  ],
  providers: [
    StepsBeginService
  ]
})
export class WizardBeginModule {

}
