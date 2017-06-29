import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { IListItem } from '../../../interfaces/list-item/list-item.interface';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';
import {IListItemFilters} from '../../../interfaces/list-item-listing/list-item-filters.interface';

@Component({
  selector: 'app-list-item-listing-page',
  templateUrl: './list-item-listing-page.component.html',
  styleUrls: ['./list-item-listing-page.component.scss']
})
export class ListItemListingPageComponent {
  listType: string;

  constructor(
    private route: ActivatedRoute,
    public listItemListingStore: ListItemListingStore
  ) {
    console.log('route.routeConfig.path:', route);
    this.listType = route.routeConfig.path;
  }

  public getListItemListing() {
    switch (this.listType) {
      case 'trash':
        return this.listItemListingStore.getTrashItemListing();
      case 'someday':
        return this.listItemListingStore.getSomedayItemListing();
      default:
        break;
    }
  }

  public getListItems() {
    switch (this.listType) {
      case 'trash':
        return this.listItemListingStore.getTrashItems();
      case 'someday':
        return this.listItemListingStore.getSomedayItems();
      default:
        break;
    }
    
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
