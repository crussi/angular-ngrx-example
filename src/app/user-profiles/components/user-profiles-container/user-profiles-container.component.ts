import {Component} from '@angular/core';
import {UserProfileListingStore} from '../../store/user-profile-listing/user-profile-listing.store';

@Component({
  selector: '',
  templateUrl: './user-profiles-container.component.html',
  styleUrls: ['./user-profiles-container.component.scss']
})
export class UserProfilesContainerComponent {

  title: string = "User Profiles";

  constructor(
    private userProfileListingStore: UserProfileListingStore,

  ) {
    this.userProfileListingStore.retrieve();
  }

}
