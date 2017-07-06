import {Component, Input} from '@angular/core';
//import { INextAction } from '../../../../shared/barrel';
import { INextAction } from '../../../interfaces';

@Component({
  selector: 'app-next-action-listing',
  templateUrl: 'next-action-listing.component.html',
  styleUrls: ['next-action-listing.component.scss']
})
export class NextActionListingComponent {

  @Input()
  public nextActions: Array<INextAction>;

}
