import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { UserProfileListingStore } from '../../../store/item-listing/item-listing.store';

import { IItemFilters } from '../../../../shared/barrel';

@Component({
  selector: 'app-userProfile-item-listing-page',
  templateUrl: './item-listing-page.component.html',
  styleUrls: ['./item-listing-page.component.scss']
})
export class UserProfileListingPageComponent {

  constructor(
    public listingStore: UserProfileListingStore
  ) {
  }

  public search(query: string) {
    this.listingStore.search(query);
  }

  public filterUser(user: string) {
    this.listingStore.filterUser(user);
  }

}
