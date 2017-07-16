import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { IUserProfile, IUserProfileFilters } from '../../../../user-profiles/interfaces';
import {UserProfileListingStore} from '../../../store/user-profile-listing/user-profile-listing.store';

@Component({
  selector: 'app-user-profile-listing-page',
  templateUrl: './user-profile-listing-page.component.html',
  styleUrls: ['./user-profile-listing-page.component.scss']
})
export class UserProfileListingPageComponent {

  constructor(
    public userProfileListingStore: UserProfileListingStore
  ) {
    this.userProfileListingStore.getUserProfileListing().subscribe(l => {
      console.log('userProfileListingStore.getUserProfileListing()',l);
    })
  }

  public search(query: string) {
    this.userProfileListingStore.search(query);
  }

  public filterUser(user: string) {
    this.userProfileListingStore.filterUser(user);
  }

  public filterFavorites() {
    this.userProfileListingStore.toggleFavoriteFilter();
  }

}
