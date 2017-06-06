import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';

import {InboxItemsContainerComponent} from './components';

import {UsersService, InboxItemsService} from './services';
//import {InboxItemsService} from './services';
import {InboxItemListingModule} from './listing/listing.module';
import {InboxItemDetailModule} from './detail/detail.module';
//import {WizardBeginModule} from '../wizard-begin/wizard-begin.module';
import {UsersEffects, InboxItemListingEffects} from '../inbox-items/store/effects';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InboxItemListingModule,
    InboxItemDetailModule,
    //WizardBeginModule,
    EffectsModule.run(UsersEffects),
    EffectsModule.run(InboxItemListingEffects),
  ],
  declarations: [
    InboxItemsContainerComponent,
  
  ],
  providers: [
    UsersService,
    InboxItemsService
  ]
})
export class InboxItemsModule {

}
