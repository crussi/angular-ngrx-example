import { Input, Component } from '@angular/core';
import { IItem } from '../../interfaces';

@Component({
    selector: 'fw-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

    @Input()
    public item: IItem;

    constructor() { }

}
