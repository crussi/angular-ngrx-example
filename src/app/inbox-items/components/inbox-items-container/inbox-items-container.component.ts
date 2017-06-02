import {Component} from '@angular/core';

import {PlatformsStore} from '../../store/platforms/platforms.store';
import {InboxItemListingStore} from '../../store/inbox-item-listing/inbox-item-listing.store';

@Component({
  selector: 'app-inbox-items-container',
  templateUrl: './inbox-items-container.component.html',
  styleUrls: ['./inbox-items-container.component.scss']
})
export class InboxItemsContainerComponent {

  constructor(
    private platformsStore: PlatformsStore,
    private inboxItemListingStore: InboxItemListingStore
  ) {
    this.platformsStore.retrieve();
    this.inboxItemListingStore.retrieve();
  }

}
