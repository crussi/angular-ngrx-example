import {Component } from '@angular/core';
import { UserProfileListingStore } from '../../../user-profiles/store/user-profile-listing/user-profile-listing.store';
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
    private userProfileListingStore: UserProfileListingStore,
    private inboxItemListingStore: InboxItemListingStore,
    private stepsBeginStore: StepsBeginStore,
    private stepsStateStore: StepsStateStore

  ) {
    this.userProfileListingStore.retrieve();
    this.inboxItemListingStore.retrieve();
    this.stepsBeginStore.retrieve();
    this.stepsStateStore.retrieve();
  }

}
