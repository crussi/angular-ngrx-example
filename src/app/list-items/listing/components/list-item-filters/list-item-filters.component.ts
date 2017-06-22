import {Component, Input, Output, EventEmitter} from '@angular/core';

import {IListItemFilters} from '../../../interfaces/list-item-listing/list-item-filters.interface';

@Component({
  selector: 'app-list-item-filters',
  templateUrl: './list-item-filters.component.html',
  styleUrls: ['./list-item-filters.component.scss']
})
export class ListItemFiltersComponent {

  @Input()
  public filters: IListItemFilters;

  @Input()
  public users: Array<string>;

  @Output()
  public userFilterChanged = new EventEmitter<string>();

  @Output()
  public favoritesFilterChanged = new EventEmitter<boolean>();

}
