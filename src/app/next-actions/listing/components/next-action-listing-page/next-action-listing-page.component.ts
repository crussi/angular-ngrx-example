import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { INextAction } from '../../../../shared/barrel';
import { UserProfileListingStore } from '../../../../user-profiles/store/user-profile-listing/user-profile-listing.store';
import {NextActionListingStore} from '../../../store/next-action-listing/next-action-listing.store';
import {INextActionFilters} from '../../../interfaces/next-action-listing/next-action-filters.interface';

@Component({
  selector: 'app-next-action-listing-page',
  templateUrl: './next-action-listing-page.component.html',
  styleUrls: ['./next-action-listing-page.component.scss']
})
export class NextActionListingPageComponent {

  constructor(
    public userProfileListingStore: UserProfileListingStore,
    public nextActionListingStore: NextActionListingStore
  ) {
  }

  public search(query: string) {
    this.nextActionListingStore.search(query);
  }

  public filterUser(user: string) {
    this.nextActionListingStore.filterUser(user);
  }

  public filterFavorites() {
    this.nextActionListingStore.toggleFavoriteFilter();
  }

}
