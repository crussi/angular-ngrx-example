import {Input, Component} from '@angular/core';

//import {IListItem} from '../../../interfaces/list-item/list-item.interface';
import { IListItem } from '../../../../shared/barrel';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';

@Component({
  selector: 'app-list-item-list-item',
  templateUrl: './list-item-list-item.component.html',
  styleUrls: ['./list-item-list-item.component.scss']
})
export class ListItemListItemComponent {

  @Input()
  public listItem: IListItem;

  constructor(private listItemListingStore: ListItemListingStore) { }

  // public toggleListItemFavorite() {
  //   this.listItemListingStore.toggleFavorite(this.listItem.id);
  // }

}
