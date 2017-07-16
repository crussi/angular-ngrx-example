import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
import { IUserProfile } from '../../../../user-profiles/interfaces';
import {UserProfileListingStore} from '../../../store/user-profile-listing/user-profile-listing.store';

@Component({
  selector: 'app-user-profile-detail',
  templateUrl: './user-profile-detail.component.html',
  styleUrls: ['./user-profile-detail.component.scss']
})
export class UserProfileDetailComponent {

  @Input()
  public userProfile: IUserProfile;

  constructor(
    private location: Location,
    private userProfileListingStore: UserProfileListingStore
  ) { }

  public toggleFavorite() {
    this.userProfileListingStore.toggleFavorite(this.userProfile.id);
  }

  public goBack() {
    this.location.back();
  }

}
