import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { ContactContainerComponent} from './components';
import { ContactService } from './services';
import { ContactListingModule} from './listing/listing.module';
import { ContactDetailModule} from './detail/detail.module';
import { ContactListingEffects } from './store';
import { ContactListingStore } from './store';
import { contactRoutes } from './contact.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(contactRoutes),
    ContactListingModule,
    ContactDetailModule,
    EffectsModule.run(ContactListingEffects),
  ],
  declarations: [
    ContactContainerComponent,

  ],
  providers: [
    ContactListingStore,
    ContactService
  ]
})
export class ContactModule {

}
