import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
//import { IDelegatedItem } from '../../../../shared/barrel';
import { IDelegatedItem } from '../../../interfaces';
import { UserProfileListingStore } from '../../../../user-profiles/store/user-profile-listing/user-profile-listing.store';
import {DelegatedItemListingStore} from '../../../store/delegated-item-listing/delegated-item-listing.store';
import {IDelegatedItemFilters} from '../../../interfaces/delegated-item-listing/delegated-item-filters.interface';

@Component({
  selector: 'app-delegated-item-listing-page',
  templateUrl: './delegated-item-listing-page.component.html',
  styleUrls: ['./delegated-item-listing-page.component.scss']
})
export class DelegatedItemListingPageComponent {

  constructor(
    public userProfileListingStore: UserProfileListingStore,
    public delegatedItemListingStore: DelegatedItemListingStore
  ) {
  }

  public search(query: string) {
    this.delegatedItemListingStore.search(query);
  }

  public filterUser(user: string) {
    this.delegatedItemListingStore.filterUser(user);
  }

  public filterFavorites() {
    this.delegatedItemListingStore.toggleFavoriteFilter();
  }

}
