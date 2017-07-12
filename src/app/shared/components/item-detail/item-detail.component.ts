import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { IItem } from '../../interfaces';

@Component({
    selector: 'fw-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnChanges, OnInit {

    @Input()
    public item: IItem;

    get hasPrevId(): boolean {
        //console.log('hasPrevId',this.item);
        return this.item && this.item.prevId != "0";
    }
    get hasNextId(): boolean {
        //console.log('hasNextId', this.item);
        return this.item && this.item.nextId != "0";
    }
    get prevId(): string {
        //console.log('hasPrevId', this.item.prevId);
        return this.item ? this.item.prevId : '0';
    }
    get nextId(): string {
        //console.log('nextId', this.item.nextId)
        return this.item ? this.item.nextId : '0';
    }    

    constructor(
        private location: Location
    ) { 
    }

    ngOnInit(): void{
    }
    ngOnChanges(changes: SimpleChanges): void {
        //console.log('ngOnChanges start');
        //console.log('**** shared item-detail changes', changes);        
    }

    public goBack() {
        this.location.back();
    }

}
