import {Component} from '@angular/core';

import {ListItemListingStore} from '../../store/list-item-listing/list-item-listing.store';
import { ListTypeEnum } from '../../models';
@Component({
  selector: 'app-list-items-container',
  templateUrl: './list-items-container.component.html',
  styleUrls: ['./list-items-container.component.scss']
})
export class ListItemsContainerComponent {

  constructor(
    private listItemListingStore: ListItemListingStore

  ) {
    this.listItemListingStore.retrieve(ListTypeEnum.Trash);
    this.listItemListingStore.retrieve(ListTypeEnum.Someday);
    this.listItemListingStore.retrieve(ListTypeEnum.Reference);
  }

}
