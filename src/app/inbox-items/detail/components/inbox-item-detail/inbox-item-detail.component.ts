import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
import {IInboxItem} from '../../../interfaces/inbox-item/inbox-item.interface';
import {InboxItemListingStore} from '../../../store/inbox-item-listing/inbox-item-listing.store';

@Component({
  selector: 'app-inbox-item-detail',
  templateUrl: './inbox-item-detail.component.html',
  styleUrls: ['./inbox-item-detail.component.scss']
})
export class InboxItemDetailComponent {

  @Input()
  public inboxItem: IInboxItem;

  constructor(
    private location: Location,
    private inboxItemListingStore: InboxItemListingStore
  ) { }

  public toggleFavorite() {
    this.inboxItemListingStore.toggleFavorite(this.inboxItem.id);
  }

  public goBack() {
    this.location.back();
  }

}
