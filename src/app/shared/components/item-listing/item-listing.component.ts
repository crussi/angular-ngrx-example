import { Component, Input } from '@angular/core';
import { IItem } from '../../interfaces';

@Component({
    selector: 'fw-item-listing',
    templateUrl: 'item-listing.component.html',
    styleUrls: ['item-listing.component.scss']
})
export class ItemListingComponent {

    @Input()
    public items: Array<IItem>;

    @Input()
    public routePath: string;

}
