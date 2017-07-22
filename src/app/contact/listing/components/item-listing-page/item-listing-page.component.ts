import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactListingStore } from '../../../store/item-listing/item-listing.store';
import { UserListingStore } from '../../../../user/store/item-listing/item-listing.store';
import { IItemFilters } from '../../../../shared/barrel';

@Component({
  selector: 'app-contact-item-listing-page',
  templateUrl: './item-listing-page.component.html',
  styleUrls: ['./item-listing-page.component.scss']
})
export class ContactListingPageComponent {

  constructor(
    public listingStore: ContactListingStore,
    public userListingStore: UserListingStore
  ) {
    console.log('contact listingStore', this.listingStore);
  }

  public search(query: string) {
    this.listingStore.search(query);
  }

  public filterUser(user: string) {
    this.listingStore.filterUser(user);
  }

}
