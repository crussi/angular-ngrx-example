import {Component, Input} from '@angular/core';

//import {IInboxItem} from '../../../interfaces/inbox-item/inbox-item.interface';
import { IInboxItem } from '../../../../shared/barrel';

@Component({
  selector: 'app-inbox-item-listing',
  templateUrl: 'inbox-item-listing.component.html',
  styleUrls: ['inbox-item-listing.component.scss']
})
export class InboxItemListingComponent {

  @Input()
  public inboxItems: Array<IInboxItem>;

}
