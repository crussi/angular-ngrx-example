import {Component } from '@angular/core';
import { UserListingStore } from '../../../user/store/item-listing/item-listing.store';
import { InboxItemListingStore } from '../../store/inbox-item-listing/inbox-item-listing.store';
import { StepsBeginStore } from '../../../wizard-begin/store/steps-begin/steps-begin.store';
import { StepsStateStore } from '../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-inbox-items-container',
  templateUrl: './inbox-items-container.component.html',
  styleUrls: ['./inbox-items-container.component.scss']
})
export class InboxItemsContainerComponent {

  constructor(
    private userListingStore: UserListingStore,
    private inboxItemListingStore: InboxItemListingStore,
    private stepsBeginStore: StepsBeginStore,
    private stepsStateStore: StepsStateStore

  ) {
    this.userListingStore.retrieve();
    this.inboxItemListingStore.retrieve();
    this.stepsBeginStore.retrieve();
    this.stepsStateStore.retrieve();
  }

}
