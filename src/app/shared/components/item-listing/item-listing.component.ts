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

    @Input()
    public routePath: string;

    constructor(private route: ActivatedRoute){        
    }

    ngOnInit():void{
        console.log('fw-item-listing ',localStorage.getItem('previousRoute'));
        console.log('fw-item-listing routePath', this.routePath);
        console.log('fw-item-listing activatedroute', this.route);
    }

}
