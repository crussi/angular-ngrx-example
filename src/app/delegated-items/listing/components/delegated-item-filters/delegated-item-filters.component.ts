import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

import {IDelegatedItemFilters} from '../../../interfaces/delegated-item-listing/delegated-item-filters.interface';
import { IUserProfile } from '../../../../shared/barrel';
@Component({
  selector: 'app-delegated-item-filters',
  templateUrl: './delegated-item-filters.component.html',
  styleUrls: ['./delegated-item-filters.component.scss']
})
export class DelegatedItemFiltersComponent implements OnChanges  {

  @Input()
  public filters: IDelegatedItemFilters;

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
    //console.log('**** changes', changes);
  }

}
