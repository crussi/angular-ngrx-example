import {Component} from '@angular/core';

import {UsersStore} from '../../store/users/users.store';
import {InboxItemListingStore} from '../../store/inbox-item-listing/inbox-item-listing.store';
import {StepsBeginStore} from '../../../wizard-begin/store/steps-begin/steps-begin.store';

@Component({
  selector: 'app-inbox-items-container',
  templateUrl: './inbox-items-container.component.html',
  styleUrls: ['./inbox-items-container.component.scss']
})
export class InboxItemsContainerComponent {

  constructor(
    private usersStore: UsersStore,
    private inboxItemListingStore: InboxItemListingStore,
    private stepsBeginStore: StepsBeginStore
  ) {
    this.usersStore.retrieve();
    this.inboxItemListingStore.retrieve();
    this.stepsBeginStore.retrieve();
  }

}
