import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { IContact, IContactFilters } from '../../../../contacts/interfaces';
import {ContactListingStore} from '../../../store/contact-listing/contact-listing.store';

@Component({
  selector: 'app-contact-listing-page',
  templateUrl: './contact-listing-page.component.html',
  styleUrls: ['./contact-listing-page.component.scss']
})
export class ContactListingPageComponent {

  constructor(
    public contactListingStore: ContactListingStore
  ) {
    this.contactListingStore.getContactListing().subscribe(l => {
      console.log('contactListingStore.getContactListing()',l);
    })
  }

  public search(query: string) {
    this.contactListingStore.search(query);
  }

  public filterUser(user: string) {
    this.contactListingStore.filterUser(user);
  }

  public filterFavorites() {
    this.contactListingStore.toggleFavoriteFilter();
  }

}
