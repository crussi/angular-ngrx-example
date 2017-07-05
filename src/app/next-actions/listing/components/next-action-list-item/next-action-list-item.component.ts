import {Input, Component} from '@angular/core';
import { INextAction } from '../../../../shared/barrel';
import {NextActionListingStore} from '../../../store/next-action-listing/next-action-listing.store';

@Component({
  selector: 'app-next-action-list-item',
  templateUrl: './next-action-list-item.component.html',
  styleUrls: ['./next-action-list-item.component.scss']
})
export class NextActionListItemComponent {

  @Input()
  public nextAction: INextAction;

  constructor(private nextActionListingStore: NextActionListingStore) { }

  public toggleNextActionFavorite() {
    this.nextActionListingStore.toggleFavorite(this.nextAction.id);
  }

}
