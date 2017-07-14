import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IItemFilters } from '../../interfaces';

@Component({
    selector: 'fw-user-filter',
    templateUrl: './user-filter.component.html',
    styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnChanges {

    @Input()
    public filters: IItemFilters;

    @Input()
    public users: Array<string>;

    @Output()
    public userFilterChanged = new EventEmitter<string>();

    @Output()
    public favoritesFilterChanged = new EventEmitter<boolean>();

    constructor() {}    

    ngOnChanges(changes: SimpleChanges) {
    }

}
