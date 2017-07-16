import {Component, Input} from '@angular/core';
import { IUserProfile } from '../../../../user-profiles/interfaces';

@Component({
  selector: 'app-user-profile-listing',
  templateUrl: 'user-profile-listing.component.html',
  styleUrls: ['user-profile-listing.component.scss']
})
export class UserProfileListingComponent {

  @Input()
  public userProfiles: Array<IUserProfile>;

}
