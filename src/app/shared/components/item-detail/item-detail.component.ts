import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { IItem } from '../../interfaces';

@Component({
    selector: 'fw-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnChanges, OnInit {

    @Input()
    public item: Observable<IItem>;
    //public item: IItem;
    
    public routePath: string;

    get hasPrevId(): boolean {
        //console.log('hasPrevId');
        //return this.item && this.item.prevId != "0";
        return true;
    }
    get hasNextId(): boolean {
        //console.log('hasNextId');
        //return this.item && this.item.nextId != "0";
        return true;
    }
    get prevId(): string {
        //console.log('hasPrevId');
        //return this.item ? this.item.prevId : '0';
        return '0';
    }
    get nextId(): string {
        //console.log('nextId', this.item.nextId)
        //return this.item ? this.item.nextId : '0';
        return '0';
    }    

    constructor(
        private location: Location
    ) { 
    }

    ngOnInit(): void {
        this.routePath = localStorage.getItem('previousRoute');
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        //console.log('ngOnChanges start');
        console.log('**** shared item-detail changes', changes);        
    }

    public goBack() {
        this.location.back();
    }

}
