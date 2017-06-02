import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {IUsers} from '../../../interfaces/users/users.interface';
import {IInboxItem} from '../../../interfaces/inbox-item/inbox-item.interface';
import {UsersStore} from '../../../store/users/users.store';
import {InboxItemListingStore} from '../../../store/inbox-item-listing/inbox-item-listing.store';
import {IInboxItemFilters} from '../../../interfaces/inbox-item-listing/inbox-item-filters.interface';

@Component({
  selector: 'app-inbox-item-listing-page',
  templateUrl: './inbox-item-listing-page.component.html',
  styleUrls: ['./inbox-item-listing-page.component.scss']
})
export class InboxItemListingPageComponent {

  constructor(
    public usersStore: UsersStore,
    public inboxItemListingStore: InboxItemListingStore
  ) {

  }

  public search(query: string) {
    this.inboxItemListingStore.search(query);
  }

  public filterUser(user: string) {
    this.inboxItemListingStore.filterUser(user);
  }

  public filterFavorites() {
    this.inboxItemListingStore.toggleFavoriteFilter();
  }

}
