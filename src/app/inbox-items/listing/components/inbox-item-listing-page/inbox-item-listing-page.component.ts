import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { IUsers } from '../../../../users/interfaces/users.interface';
import { IInboxItem } from '../../../../shared/barrel';
import { UsersStore } from '../../../../users/store/users.store';
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
