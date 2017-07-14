import { Component } from '@angular/core';
import { DelegatedItemListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: '',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class DelegatedItemsContainerComponent {

  title: string = "Waiting for";

  constructor(
    private delegatedItemListingStore: DelegatedItemListingStore,
  ) {
    this.delegatedItemListingStore.retrieve();
  }

}
