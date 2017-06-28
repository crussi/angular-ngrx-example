import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
import { IListItem } from '../../../interfaces/list-item/list-item.interface';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.scss']
})
export class ListItemDetailComponent {

  @Input()
  public listItem: IListItem;

  constructor(
    private location: Location,
    private listItemListingStore: ListItemListingStore
  ) { }

  public toggleFavorite() {
    this.listItemListingStore.toggleFavorite(this.listItem.id);
  }

  public goBack() {
    this.location.back();
  }

}
