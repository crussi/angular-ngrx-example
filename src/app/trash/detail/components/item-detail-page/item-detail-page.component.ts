import { Component, OnInit, ErrorHandler } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { ItemProcessed, ItemNext } from '../../../../shared/barrel';
import { IItem } from '../../../../shared/barrel';
import { TrashListingStore } from '../../../store/item-listing/item-listing.store';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-trash-item-detail-page',
  templateUrl: './item-detail-page.component.html',
  styleUrls: ['./item-detail-page.component.scss']
})
export class TrashDetailPageComponent implements OnInit, ErrorHandler {

  public item$: Observable<IItem>;
  //public nextId$: Observable<string>;
  
  constructor(
    private route: ActivatedRoute,
    private listingStore: TrashListingStore,
  ) {
  }

  public ngOnInit() {
    this.item$ = this.route.params
      .switchMap((params: any) => this.listingStore.getItem(params.itemId));
  }

  public onItemProcessed(event: ItemProcessed) {
    this.listingStore.setItemProcessed(event.id);
  }

  handleError(error) {
    // do something with the exception
    console.log('error occurred in item-detail-page.component',error);
  }  

}
