import { Component } from '@angular/core';
import { ContactListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: '',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ContactContainerComponent {

  title: string = "Contact";

  constructor(
    private contactListingStore: ContactListingStore,
  ) {
    this.contactListingStore.retrieve();
  }

}
