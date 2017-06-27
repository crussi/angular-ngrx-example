import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { IListItem } from '../../../../shared/barrel';
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
    console.log('route.routeConfig.path:', route.routeConfig.path);
    this.listType = route.routeConfig.path;
  }

  public getListItemListing() {
    //this.listItemListingStore.getListItemListingByType(this.listType);
    //return this.listItemListingStore.getListItemListing();
    return this.listItemListingStore.getListItemListingByType(this.listType);
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
