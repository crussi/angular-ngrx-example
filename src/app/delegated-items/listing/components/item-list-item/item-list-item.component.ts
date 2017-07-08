import {Input, Component} from '@angular/core';
//import { IDelegatedItem } from '../../../../shared/barrel';
import { IDelegatedItem } from '../../../interfaces';
import {DelegatedItemListingStore} from '../../../store/item-listing/item-listing.store';

@Component({
  selector: 'app-delegated-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.scss']
})
export class DelegatedItemListItemComponent {

  @Input()
  public delegatedItem: IDelegatedItem;

  constructor(private delegatedItemListingStore: DelegatedItemListingStore) { }

  public toggleDelegatedItemFavorite() {
    this.delegatedItemListingStore.toggleFavorite(this.delegatedItem.id);
  }

}
