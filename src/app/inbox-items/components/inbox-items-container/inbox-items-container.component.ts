import {Component} from '@angular/core';
import { UsersStore } from '../../../users/store/users.store';
import {InboxItemListingStore} from '../../store/inbox-item-listing/inbox-item-listing.store';
import {StepsBeginStore} from '../../../wizard-begin/store/steps-begin/steps-begin.store';
import {StepsStateStore} from '../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-inbox-items-container',
  templateUrl: './inbox-items-container.component.html',
  styleUrls: ['./inbox-items-container.component.scss']
})
export class InboxItemsContainerComponent {

  constructor(
    private usersStore: UsersStore,
    private inboxItemListingStore: InboxItemListingStore,
    //private listItemListingStore: ListItemListingStore,
    private stepsBeginStore: StepsBeginStore,
    private stepsStateStore: StepsStateStore

  ) {
    this.usersStore.retrieve();
    this.inboxItemListingStore.retrieve();
    //this.listItemListingStore.retrieve();
    this.stepsBeginStore.retrieve();
    this.stepsStateStore.retrieve();
  }

}
