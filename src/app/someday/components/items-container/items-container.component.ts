import { Component } from '@angular/core';
import { SomedayListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: '',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class SomedayContainerComponent {

  title: string = "Someday/maybe";

  constructor(
    private somedayListingStore: SomedayListingStore,
  ) {
    this.somedayListingStore.retrieve();
  }

}
