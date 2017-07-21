import { Component } from '@angular/core';
import { NextListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: '',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class NextContainerComponent {

  title: string = "Next";

  constructor(
    private nextListingStore: NextListingStore,
  ) {
    this.nextListingStore.retrieve();
  }

}
