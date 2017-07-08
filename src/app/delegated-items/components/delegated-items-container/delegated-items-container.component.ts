import { Component } from '@angular/core';
import { DelegatedItemListingStore } from '../../store/delegated-item-listing/delegated-item-listing.store';

@Component({
  selector: 'app-delegated-items-container',
  templateUrl: './delegated-items-container.component.html',
  styleUrls: ['./delegated-items-container.component.scss']
})
export class DelegatedItemsContainerComponent {

  constructor(
    private delegatedItemListingStore: DelegatedItemListingStore,
  ) {
    this.delegatedItemListingStore.retrieve();
  }

}
