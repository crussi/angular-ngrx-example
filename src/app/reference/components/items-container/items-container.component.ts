import { Component } from '@angular/core';
import { ReferenceListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: '',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ReferenceContainerComponent {

  title: string = "Reference";

  constructor(
    private referenceListingStore: ReferenceListingStore,
  ) {
    this.referenceListingStore.retrieve();
  }

}
