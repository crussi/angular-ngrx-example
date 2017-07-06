import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
//import { INextAction } from '../../../../shared/barrel';
import { INextAction } from '../../../interfaces';
import {NextActionListingStore} from '../../../store/next-action-listing/next-action-listing.store';

@Component({
  selector: 'app-next-action-detail',
  templateUrl: './next-action-detail.component.html',
  styleUrls: ['./next-action-detail.component.scss']
})
export class NextActionDetailComponent {

  @Input()
  public nextAction: INextAction;

  constructor(
    private location: Location,
    private nextActionListingStore: NextActionListingStore
  ) { }

  public toggleFavorite() {
    this.nextActionListingStore.toggleFavorite(this.nextAction.id);
  }

  public goBack() {
    this.location.back();
  }

}
