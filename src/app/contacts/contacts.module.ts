import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import {ContactsContainerComponent} from './components';
import {ContactsService } from './services';
import {ContactListingModule} from './listing/listing.module';
import {ContactDetailModule} from './detail/detail.module';
import { ContactListingEffects } from '../contacts/store/effects';
import { ContactListingStore } from './store/stores';
import { contactsRoutes } from './contacts.routes';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(contactsRoutes),
    ContactListingModule,
    ContactDetailModule,
    EffectsModule.run(ContactListingEffects),
  ],
  declarations: [
    ContactsContainerComponent,
  
  ],
  providers: [
    ContactListingStore,
    ContactsService
  ]
})
export class ContactsModule {
  constructor(){
    console.log('I got to ContactsModule');
  }
}
