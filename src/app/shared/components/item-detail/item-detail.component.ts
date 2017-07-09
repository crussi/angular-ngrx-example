import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
//import { IDelegatedItem } from '../../../interfaces';
//import { DelegatedItemListingStore } from '../../../store/item-listing/item-listing.store';
//import { IItem } from '../../interfaces';

@Component({
    selector: 'fw-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

    // @Input()
    // public item: IItem;

    constructor(
        private location: Location,
        //private delegatedItemListingStore: DelegatedItemListingStore
    ) { }

    // public toggleFavorite() {
    //     this.delegatedItemListingStore.toggleFavorite(this.delegatedItem.id);
    // }

    public goBack() {
        this.location.back();
    }

}
