import {Component} from '@angular/core';
import {ContactListingStore} from '../../store/contact-listing/contact-listing.store';

@Component({
  selector: '',
  templateUrl: './contacts-container.component.html',
  styleUrls: ['./contacts-container.component.scss']
})
export class ContactsContainerComponent {

  title: string = "Contacts";

  constructor(
    private contactListingStore: ContactListingStore,

  ) {
    console.log('ContactsContainerComponent b4 contactListingStore.retrieve()');
    this.contactListingStore.retrieve();
  }

}
