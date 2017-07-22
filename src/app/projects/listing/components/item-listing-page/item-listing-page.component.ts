import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserListingStore } from '../../../../user/store/item-listing/item-listing.store';
import { ProjectListingStore } from '../../../store/item-listing/item-listing.store';
import { IItemFilters } from '../../../../shared/barrel';

@Component({
  selector: 'app-project-item-listing-page',
  templateUrl: './item-listing-page.component.html',
  styleUrls: ['./item-listing-page.component.scss']
})
export class ProjectListingPageComponent {

  constructor(
    public userListingStore: UserListingStore,
    public listingStore: ProjectListingStore
  ) {
  }

  public search(query: string) {
    this.listingStore.search(query);
  }

  public filterUser(user: string) {
    this.listingStore.filterUser(user);
  }

}
