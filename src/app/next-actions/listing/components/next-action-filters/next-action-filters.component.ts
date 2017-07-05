import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

import {INextActionFilters} from '../../../interfaces/next-action-listing/next-action-filters.interface';
import { IUserProfile } from '../../../../shared/barrel';
@Component({
  selector: 'app-next-action-filters',
  templateUrl: './next-action-filters.component.html',
  styleUrls: ['./next-action-filters.component.scss']
})
export class NextActionFiltersComponent implements OnChanges  {

  @Input()
  public filters: INextActionFilters;

  @Input()
  public users: Array<string>;

  // @Input()
  // public users: Array<IUserProfile>;

  @Output()
  public userFilterChanged = new EventEmitter<string>();

  @Output()
  public favoritesFilterChanged = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    //console.log('ngOnChanges start');
    console.log('**** changes', changes);
  }

}
