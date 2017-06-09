import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

//import {IInboxItem} from '../../../interfaces/inbox-item/inbox-item.interface';
import { IInboxItem, InboxItemProcessed, InboxItemNext} from '../../../../shared/barrel';
import {InboxItemListingStore} from '../../../store/inbox-item-listing/inbox-item-listing.store';

@Component({
  selector: 'app-inbox-item-detail-page',
  templateUrl: './inbox-item-detail-page.component.html',
  styleUrls: ['./inbox-item-detail-page.component.scss']
})
export class InboxItemDetailPageComponent implements OnInit {

  public inboxItem$: Observable<IInboxItem>;

  constructor(
    private route: ActivatedRoute,
    private inboxItemListingStore: InboxItemListingStore
  ) {

  }

  public ngOnInit() {
    this.inboxItem$ = this.route.params
      .switchMap((params: any) => this.inboxItemListingStore.getInboxItem(params.inboxItemId));
  }

  public onInboxItemProcessed(event:InboxItemProcessed) {
    console.log('onInboxItemProcessed()',event);
    this.inboxItemListingStore.setUpdateProcessed(event.id);
  }

  public onInboxItemNext(event: InboxItemNext) {
    console.log('onInboxItemNext()');
    // this.inboxItem$ = this.route.params
    //   .switchMap((params: any) => this.inboxItemListingStore.getNextInboxItem());
    this.inboxItem$ = this.inboxItemListingStore.getNextInboxItem(event.id);
  }  

}
