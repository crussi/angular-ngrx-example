import {Component} from '@angular/core';

//import {UsersStore} from '../../store/users/users.store';
import {ListItemListingStore} from '../../store/list-item-listing/list-item-listing.store';
import {StepsBeginStore} from '../../../wizard-begin/store/steps-begin/steps-begin.store';
import {StepsStateStore} from '../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-list-items-container',
  templateUrl: './list-items-container.component.html',
  styleUrls: ['./list-items-container.component.scss']
})
export class ListItemsContainerComponent {

  constructor(
    //private usersStore: UsersStore,
    private listItemListingStore: ListItemListingStore,
    private stepsBeginStore: StepsBeginStore,
    private stepsStateStore: StepsStateStore

  ) {
    //this.usersStore.retrieve();
    this.listItemListingStore.retrieve();
    this.stepsBeginStore.retrieve();
    this.stepsStateStore.retrieve();
  }

}
