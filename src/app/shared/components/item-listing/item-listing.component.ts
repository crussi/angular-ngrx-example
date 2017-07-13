import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from '../../interfaces';

@Component({
    selector: 'fw-item-listing',
    templateUrl: 'item-listing.component.html',
    styleUrls: ['item-listing.component.scss']
})
export class ItemListingComponent implements OnInit {

    @Input()
    public items: Array<IItem>;

    // @Input()
    // public routePath: string;
    public routePath: string;

    constructor(private route: ActivatedRoute){        
    }

    ngOnInit():void{
        //let prev = localStorage.getItem('previousRoute');
        //let curr = localStorage.getItem('currentRoute');
        this.routePath = localStorage.getItem('currentRoute');
        //console.log('fw-item-listing prev', prev);
        //console.log('fw-item-listing curr', curr);
    }

}
