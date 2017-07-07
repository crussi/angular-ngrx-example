import {Component} from '@angular/core';
import { UserProfileListingStore } from '../../../user-profiles/store/user-profile-listing/user-profile-listing.store';
import {DelegatedItemListingStore} from '../../store/delegated-item-listing/delegated-item-listing.store';
import {StepsBeginStore} from '../../../wizard-begin/store/steps-begin/steps-begin.store';
import {StepsStateStore} from '../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-delegated-items-container',
  templateUrl: './delegated-items-container.component.html',
  styleUrls: ['./delegated-items-container.component.scss']
})
export class DelegatedItemsContainerComponent {

  constructor(
    //private userProfileListingStore: UserProfileListingStore,
    private delegatedItemListingStore: DelegatedItemListingStore,
    // private stepsBeginStore: StepsBeginStore,
    // private stepsStateStore: StepsStateStore

  ) {
    //this.userProfileListingStore.retrieve();
    this.delegatedItemListingStore.retrieve();
    // this.stepsBeginStore.retrieve();
    // this.stepsStateStore.retrieve();
  }

}
