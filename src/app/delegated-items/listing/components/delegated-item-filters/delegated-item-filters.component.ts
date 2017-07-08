import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {IItemFilters} from '../../../interfaces/delegated-item-listing/delegated-item-filters.interface';

@Component({
  selector: 'app-delegated-item-filters',
  templateUrl: './delegated-item-filters.component.html',
  styleUrls: ['./delegated-item-filters.component.scss']
})
export class DelegatedItemFiltersComponent implements OnChanges  {

  @Input()
  public filters: IItemFilters;

  @Input()
  public users: Array<string>;

  @Output()
  public userFilterChanged = new EventEmitter<string>();

  @Output()
  public favoritesFilterChanged = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    //console.log('****ngOnChanges changes', changes);
  }

}
