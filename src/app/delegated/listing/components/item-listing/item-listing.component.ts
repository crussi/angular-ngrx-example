import {Component, Input} from '@angular/core';
//import { IDelegatedItem } from '../../../interfaces';
import { IItem } from '../../../../shared/barrel';
@Component({
  selector: 'app-delegated-item-listing',
  templateUrl: 'item-listing.component.html',
  styleUrls: ['item-listing.component.scss']
})
export class DelegatedItemListingComponent {

  @Input()
  public items: Array<IItem>;

  routePath: string = "'/delegatedItems'";

}
