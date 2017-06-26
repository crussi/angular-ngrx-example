import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
//import { IUsers } from '../../../../users/interfaces/users.interface';
import { IUserProfile } from '../../../../shared/barrel';
//import { UsersStore } from '../../../../users/store/users.store';
import {UserProfileListingStore} from '../../../store/user-profile-listing/user-profile-listing.store';
import {IUserProfileFilters} from '../../../interfaces/user-profile-listing/user-profile-filters.interface';

@Component({
  selector: 'app-user-profile-listing-page',
  templateUrl: './user-profile-listing-page.component.html',
  styleUrls: ['./user-profile-listing-page.component.scss']
})
export class UserProfileListingPageComponent {

  constructor(
    //public usersStore: UsersStore,
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
