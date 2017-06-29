import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Location} from '@angular/common';
import { IListItem, TrashItem, SomedayItem } from '../../../interfaces';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.scss']
})
export class ListItemDetailComponent implements OnChanges {

  @Input()
  public listItem: IListItem;

  public isTrash = false;
  public trashItem?: TrashItem;
  public isSomeday = false;
  public somedayItem?: SomedayItem;

  constructor(
    private location: Location,
    private listItemListingStore: ListItemListingStore
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    console.log('this.listItem', this.listItem);
    if (changes.listItem && this.listItem) {
      console.log('****!!! ngOnChanges listItem.type', this.listItem.type);
      switch (this.listItem.type) {
        case 'trash':
          this.isTrash = true;
          this.trashItem = Object.assign(new TrashItem(), this.listItem);
          console.log('my new trash item', this.trashItem);
          break;
        case 'someday':
          this.isSomeday = true;
          this.somedayItem = Object.assign(new SomedayItem(), this.listItem);
          console.log('my new someday item', this.somedayItem);
        
      }
      
    }
  }  

  public toggleFavorite() {
    this.listItemListingStore.toggleFavorite(this.listItem.id);
  }

  public goBack() {
    this.location.back();
  }

}
