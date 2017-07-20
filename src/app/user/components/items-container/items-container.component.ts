import { Component } from '@angular/core';
import { UserListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: '',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class UserContainerComponent {

  title: string = "User";

  constructor(
    private userListingStore: UserListingStore,
  ) {
    this.userListingStore.retrieve();
  }

}
