import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserListingStore } from '../../../store/item-listing/item-listing.store';
import { IItemFilters } from '../../../../shared/barrel';

@Component({
  selector: 'app-user-item-listing-page',
  templateUrl: './item-listing-page.component.html',
  styleUrls: ['./item-listing-page.component.scss']
})
export class UserListingPageComponent {

  constructor(
    public listingStore: UserListingStore
    
  ) {
    console.log('user listingStore', this.listingStore);
  }

  public search(query: string) {
    this.listingStore.search(query);
  }

  public filterUser(user: string) {
    this.listingStore.filterUser(user);
  }

}
