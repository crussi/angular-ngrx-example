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
    private _item: IItem
    public routePath: string;

    get hasPrevId(): boolean {
        return this._item && this._item.prevId != "0";
    }
    get hasNextId(): boolean {
        return this._item && this._item.nextId != "0";
    }
    get prevId(): string {
        return this._item ? this._item.prevId : '0';
    }
    get nextId(): string {
        return this._item ? this._item.nextId : '0';
    }    

    constructor(
        private location: Location,
        private router: Router) {}

    ngOnInit(): void {
        this.routePath = localStorage.getItem('previousRoute');
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.item) {
            this._item = changes.item.currentValue;
        }     
    }

    public goBack() {
        this.router.navigateByUrl(this.routePath);
    }
}
