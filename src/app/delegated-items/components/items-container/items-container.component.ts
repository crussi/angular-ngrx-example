import { Component } from '@angular/core';
import { DelegatedItemListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: 'app-delegated-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class DelegatedItemsContainerComponent {

  constructor(
    private delegatedItemListingStore: DelegatedItemListingStore,
  ) {
    this.delegatedItemListingStore.retrieve();
  }

}
