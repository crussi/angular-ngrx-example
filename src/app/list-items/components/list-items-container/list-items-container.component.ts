import {Component} from '@angular/core';

import {ListItemListingStore} from '../../store/list-item-listing/list-item-listing.store';

@Component({
  selector: 'app-list-items-container',
  templateUrl: './list-items-container.component.html',
  styleUrls: ['./list-items-container.component.scss']
})
export class ListItemsContainerComponent {

  constructor(
    private listItemListingStore: ListItemListingStore

  ) {
    this.listItemListingStore.retrieve('trash');
    this.listItemListingStore.retrieve('someday');
    this.listItemListingStore.retrieve('reference');
  }

}
