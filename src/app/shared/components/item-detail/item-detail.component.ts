import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationStart, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
//import { IDelegatedItem } from '../../../interfaces';
//import { DelegatedItemListingStore } from '../../../store/item-listing/item-listing.store';
import { IItem } from '../../interfaces';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/bufferCount';

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
        return this.item.prevId != "0";
    }
    get hasNextId(): boolean {
        //console.log('hasNextId', this.item);
        return this.item.nextId != "0";
    }
    get prevId(): string {
        //console.log('hasPrevId', this.item.prevId);
        return this.item.prevId;
    }
    get nextId(): string {
        //console.log('nextId', this.item.nextId);
        return this.item.nextId;
    }    

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private router: Router    
        //private delegatedItemListingStore: DelegatedItemListingStore
    ) { 
        console.log('shared item-detail route', route);
        //console.log(route.snapshot.url); // array of states
        //console.log(route.snapshot.url[0].path); 
        // this.router.events.pairwise().subscribe((event) => {
        //     console.log('shared router event:',event);
        // });        
        
    }

    ngOnInit(): void{
        console.log('shared item-detail ngOnInit');
        this.router.events.filter(e => e instanceof NavigationStart)
            .bufferCount(1, 1).subscribe(e => console.log('shared item-detail route events',e[0]['url']));
    }
    // public toggleFavorite() {
    //     this.delegatedItemListingStore.toggleFavorite(this.delegatedItem.id);
    // }
    ngOnChanges(changes: SimpleChanges): void {
        //console.log('ngOnChanges start');
        console.log('**** shared item-detail changes', changes);
        
    }

    public goBack() {
        this.location.back();
    }

}
