import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserProfileListingStore } from '../../../../user-profile/store/item-listing/item-listing.store';
import { ReferenceListingStore } from '../../../store/item-listing/item-listing.store';
import { IItemFilters } from '../../../../shared/barrel';

@Component({
  selector: 'app-reference-item-listing-page',
  templateUrl: './item-listing-page.component.html',
  styleUrls: ['./item-listing-page.component.scss']
})
export class ReferenceListingPageComponent {

  constructor(
    public userProfileListingStore: UserProfileListingStore,
    public listingStore: ReferenceListingStore
  ) {
  }

  public search(query: string) {
    this.listingStore.search(query);
  }

  public filterUser(user: string) {
    this.listingStore.filterUser(user);
  }

}
