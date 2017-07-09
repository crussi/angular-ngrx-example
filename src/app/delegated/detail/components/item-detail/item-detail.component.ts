import { Component, Input } from '@angular/core';
import { IDelegatedItem } from '../../../interfaces';
//import { DelegatedItemListingStore } from '../../../store/item-listing/item-listing.store';

@Component({
  selector: 'app-delegated-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class DelegatedItemDetailComponent {

  @Input()
  public item: IDelegatedItem;

  constructor(
    //private delegatedItemListingStore: DelegatedItemListingStore
  ) { }

}
