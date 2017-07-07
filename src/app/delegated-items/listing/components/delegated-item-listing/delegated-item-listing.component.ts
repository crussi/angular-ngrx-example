import {Component, Input} from '@angular/core';
//import { IDelegatedItem } from '../../../../shared/barrel';
import { IDelegatedItem } from '../../../interfaces';

@Component({
  selector: 'app-delegated-item-listing',
  templateUrl: 'delegated-item-listing.component.html',
  styleUrls: ['delegated-item-listing.component.scss']
})
export class DelegatedItemListingComponent {

  @Input()
  public delegatedItems: Array<IDelegatedItem>;

}
