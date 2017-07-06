import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { IListItem } from '../../../interfaces/list-item/list-item.interface';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';
import {IListItemFilters} from '../../../interfaces/list-item-listing/list-item-filters.interface';
import { ListTypeEnum } from '../../../models';

@Component({
  selector: 'app-list-item-listing-page',
  templateUrl: './list-item-listing-page.component.html',
  styleUrls: ['./list-item-listing-page.component.scss']
})
export class ListItemListingPageComponent {
  listType: ListTypeEnum;

  constructor(
    private route: ActivatedRoute,
    public listItemListingStore: ListItemListingStore
  ) {
    console.log('route.routeConfig.path:', route);
    //this.listType = route.routeConfig.path;
    switch (route.routeConfig.path) {
      case 'trash':
        this.listType = ListTypeEnum.Trash;
        break;
      case 'someday':
        this.listType = ListTypeEnum.Someday;
        break;
      case 'reference':
        this.listType = ListTypeEnum.Reference;
        break;
    }
  }

  public getListItemListing() {
    
    switch (this.listType) {
      case ListTypeEnum.Trash:       
        return this.listItemListingStore.getTrashItemListing();
      case ListTypeEnum.Someday:
        return this.listItemListingStore.getSomedayItemListing();
      case ListTypeEnum.Reference:
        return this.listItemListingStore.getReferenceItemListing();
      default:
        break;
    }
  }

  public getListItems() {
    switch (this.listType) {
      case ListTypeEnum.Trash:
        return this.listItemListingStore.getTrashItems();
      case ListTypeEnum.Someday:
        return this.listItemListingStore.getSomedayItems();
      case ListTypeEnum.Reference:
        return this.listItemListingStore.getReferenceItems();
      default:
        break;
    }
    
  }

  public search(query: string) {
    // switch (this.listType) {
    //   case ListTypeEnum.Trash:
    //     this.listItemListingStore.search(query);
    //     break
    //   case ListTypeEnum.Someday:
    //     this.listItemListingStore.search(query);
    //     break
    //   case ListTypeEnum.Reference:
    //     this.listItemListingStore.search(query);
    //     break
    // }
    this.listItemListingStore.search(query, this.listType);

  }
  // public filterUser(user: string) {
  //   this.listItemListingStore.filterUser(user);
  // }

  // public filterFavorites() {
  //   this.listItemListingStore.toggleFavoriteFilter();
  // }

}
