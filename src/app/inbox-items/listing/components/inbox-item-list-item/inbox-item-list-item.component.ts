import {Input, Component} from '@angular/core';

import {IInboxItem} from '../../../interfaces/inbox-item/inbox-item.interface';
import {InboxItemListingStore} from '../../../store/inbox-item-listing/inbox-item-listing.store';

@Component({
  selector: 'app-inbox-item-list-item',
  templateUrl: './inbox-item-list-item.component.html',
  styleUrls: ['./inbox-item-list-item.component.scss']
})
export class InboxItemListItemComponent {

  @Input()
  public inboxItem: IInboxItem;

  constructor(private inboxItemListingStore: InboxItemListingStore) { }

  public toggleInboxItemFavorite() {
    this.inboxItemListingStore.toggleFavorite(this.inboxItem.id);
  }

}
