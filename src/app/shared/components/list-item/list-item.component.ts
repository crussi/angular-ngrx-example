import { Input, Component } from '@angular/core';
//import { IDelegatedItem } from '../../../../shared/barrel';
import { IItem } from '../../interfaces';
//import { DelegatedItemListingStore } from '../../../store/item-listing/item-listing.store';

@Component({
    selector: 'fw-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

    @Input()
    public item: IItem;

    constructor() { }

    // public toggleDelegatedItemFavorite() {
    //   this.delegatedItemListingStore.toggleFavorite(this.delegatedItem.id);
    // }

}
