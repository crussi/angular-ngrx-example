import {Component} from '@angular/core';
import { UsersStore } from '../../../users/store/users.store';
import {UserProfileListingStore} from '../../store/user-profile-listing/user-profile-listing.store';
//import {StepsBeginStore} from '../../../wizard-begin/store/steps-begin/steps-begin.store';
//import {StepsStateStore} from '../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-user-profiles-container',
  templateUrl: './user-profiles-container.component.html',
  styleUrls: ['./user-profiles-container.component.scss']
})
export class UserProfilesContainerComponent {

  constructor(
    private usersStore: UsersStore,
    private userProfileListingStore: UserProfileListingStore,
    //private listItemListingStore: ListItemListingStore,
    //private stepsBeginStore: StepsBeginStore,
    //private stepsStateStore: StepsStateStore

  ) {
    this.usersStore.retrieve();
    this.userProfileListingStore.retrieve();
    //this.listItemListingStore.retrieve();
    //this.stepsBeginStore.retrieve();
    //this.stepsStateStore.retrieve();
  }

}
