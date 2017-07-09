import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
//import { IDelegatedItem } from '../../../../shared/barrel';
import { IDelegatedItem } from '../../../interfaces';
import { UserProfileListingStore } from '../../../../user-profiles/store/user-profile-listing/user-profile-listing.store';
import {DelegatedItemListingStore} from '../../../store/item-listing/item-listing.store';
//import {IItemFilters} from '../../../interfaces/item-listing/item-filters.interface';
import { IItemFilters } from '../../../../shared/barrel';

@Component({
  selector: 'app-delegated-item-listing-page',
  templateUrl: './item-listing-page.component.html',
  styleUrls: ['./item-listing-page.component.scss']
})
export class DelegatedItemListingPageComponent {

  routePath: string = "'/delegatedItems'";
  constructor(
    public userProfileListingStore: UserProfileListingStore,
    public listingStore: DelegatedItemListingStore
  ) {
  }

  public search(query: string) {
    this.listingStore.search(query);
  }

  public filterUser(user: string) {
    this.listingStore.filterUser(user);
  }

  // public filterFavorites() {
  //   this.listingStore.toggleFavoriteFilter();
  // }

}
