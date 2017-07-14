import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
    public _item: IItem
    public routePath: string;
    public returnUrl: string;

    get hasPrevId(): boolean {
        //console.log('hasPrevId');
        return this._item && this._item.prevId != "0";
        //return this.item.map(x => { return x.prevId !== '0'})
        //return true;
    }
    get hasNextId(): boolean {
        //console.log('hasNextId');
        return this._item && this._item.nextId != "0";
        //return true;
    }
    get prevId(): string {
        //console.log('hasPrevId');
        return this._item ? this._item.prevId : '0';
        //return '0';
    }
    get nextId(): string {
        //console.log('nextId', this.item.nextId)
        return this._item ? this._item.nextId : '0';
        //return '0';
    }    

    constructor(
        private location: Location,
        private router: Router
    ) { 
    }

    ngOnInit(): void {
        this.routePath = localStorage.getItem('previousRoute');
        this.returnUrl = localStorage.getItem('previousRoute');
        console.log('returnUrl:',this.returnUrl);
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        //console.log('ngOnChanges start');
        console.log('**** shared item-detail changes', changes);  
        if (changes.item) {
            this._item = changes.item.currentValue;
            console.log('**** shared item-detail curVal', this._item);
        }     
    }

    public goBack() {
        //this.location.back();
        this.router.navigateByUrl(this.returnUrl);
    }

}
