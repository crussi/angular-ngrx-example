import { Component } from '@angular/core';
import { UserProfileListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: '',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class UserProfilesContainerComponent {

  title: string = "Waiting for";

  constructor(
    private userProfileListingStore: UserProfileListingStore,
  ) {
    this.userProfileListingStore.retrieve();
  }

}
