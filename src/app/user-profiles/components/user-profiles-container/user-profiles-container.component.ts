import {Component} from '@angular/core';
import {UserProfileListingStore} from '../../store/user-profile-listing/user-profile-listing.store';

@Component({
  selector: 'app-user-profiles-container',
  templateUrl: './user-profiles-container.component.html',
  styleUrls: ['./user-profiles-container.component.scss']
})
export class UserProfilesContainerComponent {

  constructor(
    private userProfileListingStore: UserProfileListingStore,

  ) {
    this.userProfileListingStore.retrieve();
  }

}
