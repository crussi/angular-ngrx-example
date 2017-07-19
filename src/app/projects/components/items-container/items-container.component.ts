import { Component } from '@angular/core';
import { ProjectListingStore } from '../../store/item-listing/item-listing.store';

@Component({
  selector: '',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ProjectContainerComponent {

  title: string = "Project";

  constructor(
    private projectListingStore: ProjectListingStore,
  ) {
    this.projectListingStore.retrieve();
  }

}
