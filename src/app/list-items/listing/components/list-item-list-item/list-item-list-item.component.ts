import {Input, Component, OnChanges, SimpleChanges} from '@angular/core';
import { IListItem } from '../../../interfaces';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';

@Component({
  selector: 'app-list-item-list-item',
  templateUrl: './list-item-list-item.component.html',
  styleUrls: ['./list-item-list-item.component.scss']
})
export class ListItemListItemComponent implements OnChanges {

  @Input()
  public listItem: IListItem;

  public isTrash = false;
  public isSomeday = false;
  public isReference = false;

  constructor(private listItemListingStore: ListItemListingStore) { }

  // public toggleListItemFavorite() {
  //   this.listItemListingStore.toggleFavorite(this.listItem.id);
  // }

  ngOnChanges(changes: SimpleChanges) {
    //console.log('changes', changes);
    if (changes.listItem) {
      this.isTrash = this.listItem.type == 'trash';
      this.isSomeday = this.listItem.type == 'someday';
      this.isReference = this.listItem.type == 'reference';
    }
  }

}
