import {Component, Input} from '@angular/core';
import { IListItem } from '../../../../shared/barrel';

@Component({
  selector: 'app-list-item-listing',
  templateUrl: 'list-item-listing.component.html',
  styleUrls: ['list-item-listing.component.scss']
})
export class ListItemListingComponent {

  @Input()
  public listItems: Array<IListItem>;



}
