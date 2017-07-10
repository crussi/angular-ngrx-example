import { Component } from '@angular/core';
import { TrashListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: '',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class TrashContainerComponent {

  title: string = "Trash";

  constructor(
    private trashListingStore: TrashListingStore,
  ) {
    this.trashListingStore.retrieve();
  }

}
