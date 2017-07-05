import {Component} from '@angular/core';
import { UserProfileListingStore } from '../../../user-profiles/store/user-profile-listing/user-profile-listing.store';
import {NextActionListingStore} from '../../store/next-action-listing/next-action-listing.store';
import {StepsBeginStore} from '../../../wizard-begin/store/steps-begin/steps-begin.store';
import {StepsStateStore} from '../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-next-actions-container',
  templateUrl: './next-actions-container.component.html',
  styleUrls: ['./next-actions-container.component.scss']
})
export class NextActionsContainerComponent {

  constructor(
    private userProfileListingStore: UserProfileListingStore,
    private nextActionListingStore: NextActionListingStore,
    private stepsBeginStore: StepsBeginStore,
    private stepsStateStore: StepsStateStore

  ) {
    this.userProfileListingStore.retrieve();
    this.nextActionListingStore.retrieve();
    this.stepsBeginStore.retrieve();
    this.stepsStateStore.retrieve();
  }

}
