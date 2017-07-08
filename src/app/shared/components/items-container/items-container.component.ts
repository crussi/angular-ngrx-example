import { Component, Input } from '@angular/core';
//import { DelegatedItemListingStore } from '../../store/item-listing/item-listing.store';

@Component({
    selector: 'app-items-container',
    templateUrl: './items-container.component.html',
    styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent {

    @Input()
    public title: string;

    constructor(
        //private delegatedItemListingStore: DelegatedItemListingStore,
    ) {
        //this.delegatedItemListingStore.retrieve();
    }

}
