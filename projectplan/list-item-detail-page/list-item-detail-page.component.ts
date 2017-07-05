import { Component, OnInit, OnDestroy, ErrorHandler} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { StepEnum } from '../../../../shared/barrel';
import { IListItem } from '../../../interfaces/list-item/list-item.interface';
import {ListItemListingStore} from '../../../store/list-item-listing/list-item-listing.store';
import { StepsStateStore } from '../../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-list-item-detail-page',
  templateUrl: './list-item-detail-page.component.html',
  styleUrls: ['./list-item-detail-page.component.scss']
})
export class ListItemDetailPageComponent implements OnInit, ErrorHandler {

  public listItem$: Observable<IListItem>;

  constructor(
    private route: ActivatedRoute,
    private listItemListingStore: ListItemListingStore,
    private stepsStateStore: StepsStateStore,
  ) {
  }

  public ngOnInit() {
    this.listItem$ = this.route.params
      .switchMap((params: any) =>{
        //console.log('ngOnInit list-item-detail-page',this.route); 
        let paths = this.route.routeConfig.path.split('/');
        if (paths.length > 0) {
          let listType: string = paths[0];
          console.log('ngOnInit list-item-detail-page listType', listType); 
          switch (listType) {
            case 'trash':
              return this.listItemListingStore.getTrashItem(params.listItemId)
            case 'someday':
              return this.listItemListingStore.getSomedayItem(params.listItemId)
            case 'reference':
              return this.listItemListingStore.getReferenceItem(params.listItemId)
            default:
              return this.listItemListingStore.getListItem(params.listItemId)

          }
        }
      });
  }

  public ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    //this.subscription.unsubscribe();
  }


  handleError(error) {
    // do something with the exception
    console.log('error occurred in list-item-detail-page.component',error);
  }  

}
