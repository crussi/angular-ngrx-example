import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

//import {IUsers} from '../../../interfaces/users/users.interface';
//import {IListItem} from '../../../interfaces/list-item/list-item.interface';
import { IListItem } from '../../../../shared/barrel';
//import {UsersStore} from '../../../store/users/users.store';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';
import {IListItemFilters} from '../../../interfaces/list-item-listing/list-item-filters.interface';
@Component({
  selector: 'app-list-item-listing-page',
  templateUrl: './list-item-listing-page.component.html',
  styleUrls: ['./list-item-listing-page.component.scss']
})
export class ListItemListingPageComponent {

  constructor(
    //public usersStore: UsersStore,
    public listItemListingStore: ListItemListingStore
  ) {

  }

  public search(query: string) {
    this.listItemListingStore.search(query);
  }

  public filterUser(user: string) {
    this.listItemListingStore.filterUser(user);
  }

  public filterFavorites() {
    this.listItemListingStore.toggleFavoriteFilter();
  }

}