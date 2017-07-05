import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Location} from '@angular/common';
import { IListItem } from '../../../interfaces';
import { TrashItem, SomedayItem, ReferenceItem } from '../../../models/list-item.models';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';
import { ListTypeEnum } from '../../../models/list-item.enum';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.scss']
})
export class ListItemDetailComponent implements OnChanges {

  @Input()
  public listItem: IListItem;

  public listType: ListTypeEnum;
  public isTrash() { return this.listType == ListTypeEnum.Trash; }
  public trashItem?: TrashItem;
  public isSomeday() { return this.listType == ListTypeEnum.Someday; }
  public somedayItem?: SomedayItem;
  public isReference() { return this.listType == ListTypeEnum.Reference; }
  public referenceItem?: ReferenceItem;

  constructor(
    private location: Location,
    private listItemListingStore: ListItemListingStore
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    console.log('this.listItem', this.listItem);
    if (changes.listItem && this.listItem) {
      console.log('****!!! ngOnChanges listItem:', this.listItem);
      switch (this.listItem.type) {
        case 'trash':
          this.listType = ListTypeEnum.Trash;
          this.trashItem = Object.assign(new TrashItem(), this.listItem);
          console.log('my new trash item', this.trashItem);
          break;
        case 'someday':
          this.listType = ListTypeEnum.Someday;
          this.somedayItem = Object.assign(new SomedayItem(), this.listItem);
          break;
          //console.log('my new someday item', this.somedayItem);
        case 'reference':
          this.listType = ListTypeEnum.Reference;
          this.referenceItem = Object.assign(new ReferenceItem(), this.listItem);
          console.log('my new reference item', this.referenceItem);
          break;
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
