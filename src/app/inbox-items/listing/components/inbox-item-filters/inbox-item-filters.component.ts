import {Component, Input, Output, EventEmitter} from '@angular/core';

import {IInboxItemFilters} from '../../../interfaces/inbox-item-listing/inbox-item-filters.interface';

@Component({
  selector: 'app-inbox-item-filters',
  templateUrl: './inbox-item-filters.component.html',
  styleUrls: ['./inbox-item-filters.component.scss']
})
export class InboxItemFiltersComponent {

  @Input()
  public filters: IInboxItemFilters;

  @Input()
  public platforms: Array<string>;

  @Output()
  public platformFilterChanged = new EventEmitter<string>();

  @Output()
  public favoritesFilterChanged = new EventEmitter<boolean>();

}
