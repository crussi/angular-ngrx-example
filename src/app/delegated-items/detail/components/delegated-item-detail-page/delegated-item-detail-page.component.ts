import { Component, OnInit, ErrorHandler } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { DelegatedItemProcessed, DelegatedItemNext } from '../../../models/delegated-item.models';
import { IDelegatedItem } from '../../../interfaces';
import { DelegatedItemListingStore } from '../../../store/delegated-item-listing/delegated-item-listing.store';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-delegated-item-detail-page',
  templateUrl: './delegated-item-detail-page.component.html',
  styleUrls: ['./delegated-item-detail-page.component.scss']
})
export class DelegatedItemDetailPageComponent implements OnInit, ErrorHandler {

  public delegatedItem$: Observable<IDelegatedItem>;
  public nextId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private delegatedItemListingStore: DelegatedItemListingStore,
  ) {
  }

  public ngOnInit() {
    this.delegatedItem$ = this.route.params
      .switchMap((params: any) => this.delegatedItemListingStore.getDelegatedItem(params.delegatedItemId));
  }


  public onDelegatedItemProcessed(event: DelegatedItemProcessed) {
    this.delegatedItemListingStore.setDelegatedItemProcessed(event.id);
  }

  handleError(error) {
    // do something with the exception
    console.log('error occurred in delegated-item-detail-page.component',error);
  }  

}
