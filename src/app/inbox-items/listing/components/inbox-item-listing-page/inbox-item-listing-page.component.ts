import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {IPlatforms} from '../../../interfaces/platforms/platforms.interface';
import {IInboxItem} from '../../../interfaces/inbox-item/inbox-item.interface';
//import {PlatformsStore} from '../../../store/platforms/platforms.store';
import {InboxItemListingStore} from '../../../store/inbox-item-listing/inbox-item-listing.store';
import {IInboxItemFilters} from '../../../interfaces/inbox-item-listing/inbox-item-filters.interface';

@Component({
  selector: 'app-inbox-item-listing-page',
  templateUrl: './inbox-item-listing-page.component.html',
  styleUrls: ['./inbox-item-listing-page.component.scss']
})
export class InboxItemListingPageComponent {

  constructor(
    //public platformsStore: PlatformsStore,
    public inboxItemListingStore: InboxItemListingStore
  ) {

  }

  public search(query: string) {
    this.inboxItemListingStore.search(query);
  }

  // public filterPlatform(platform: string) {
  //   this.inboxItemListingStore.filterPlatform(platform);
  // }

  public filterFavorites() {
    this.inboxItemListingStore.toggleFavoriteFilter();
  }

}
