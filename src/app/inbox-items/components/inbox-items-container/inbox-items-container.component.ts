import {Component} from '@angular/core';

import {UsersStore} from '../../store/users/users.store';
import {InboxItemListingStore} from '../../store/inbox-item-listing/inbox-item-listing.store';

@Component({
  selector: 'app-inbox-items-container',
  templateUrl: './inbox-items-container.component.html',
  styleUrls: ['./inbox-items-container.component.scss']
})
export class InboxItemsContainerComponent {

  constructor(
    private usersStore: UsersStore,
    private inboxItemListingStore: InboxItemListingStore
  ) {
    this.usersStore.retrieve();
    this.inboxItemListingStore.retrieve();
  }

}
