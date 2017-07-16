import {Input, Component} from '@angular/core';
import { IUserProfile } from '../../../../user-profiles/interfaces';
import {UserProfileListingStore} from '../../../store/user-profile-listing/user-profile-listing.store';

@Component({
  selector: 'app-user-profile-list-item',
  templateUrl: './user-profile-list-item.component.html',
  styleUrls: ['./user-profile-list-item.component.scss']
})
export class UserProfileListItemComponent {

  @Input()
  public userProfile: IUserProfile;

  constructor(private userProfileListingStore: UserProfileListingStore) { }

  public toggleUserProfileFavorite() {
    this.userProfileListingStore.toggleFavorite(this.userProfile.id);
  }

}
