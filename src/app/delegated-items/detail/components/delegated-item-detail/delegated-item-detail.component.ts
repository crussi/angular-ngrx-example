import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
//import { IDelegatedItem } from '../../../../shared/barrel';
import { IDelegatedItem } from '../../../interfaces';
import {DelegatedItemListingStore} from '../../../store/delegated-item-listing/delegated-item-listing.store';

@Component({
  selector: 'app-delegated-item-detail',
  templateUrl: './delegated-item-detail.component.html',
  styleUrls: ['./delegated-item-detail.component.scss']
})
export class DelegatedItemDetailComponent {

  @Input()
  public delegatedItem: IDelegatedItem;

  constructor(
    private location: Location,
    private delegatedItemListingStore: DelegatedItemListingStore
  ) { }

  public toggleFavorite() {
    this.delegatedItemListingStore.toggleFavorite(this.delegatedItem.id);
  }

  public goBack() {
    this.location.back();
  }

}
