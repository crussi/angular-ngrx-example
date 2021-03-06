import { Component, Input, OnInit, TemplateRef } from '@angular/core';
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
    public template: TemplateRef<any>;
    public routePath: string;

    constructor(private route: ActivatedRoute){ }

    ngOnInit():void{
        this.routePath = localStorage.getItem('currentRoute');
    }

}
