import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

import {IInboxItemFilters} from '../../../interfaces/inbox-item-listing/inbox-item-filters.interface';
@Component({
  selector: 'app-inbox-item-filters',
  templateUrl: './inbox-item-filters.component.html',
  styleUrls: ['./inbox-item-filters.component.scss']
})
export class InboxItemFiltersComponent implements OnChanges  {

  @Input()
  public filters: IInboxItemFilters;

  @Input()
  public users: Array<string>;

  @Output()
  public userFilterChanged = new EventEmitter<string>();

  @Output()
  public favoritesFilterChanged = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    //console.log('ngOnChanges start');
    //console.log('**** changes', changes);
  }

}
