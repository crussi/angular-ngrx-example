import { Component, OnInit, OnDestroy, ErrorHandler} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { StepEnum } from '../../../../shared/barrel';
import { IContact } from '../../../../contacts/interfaces';
import { ContactListingStore } from '../../../store/contact-listing/contact-listing.store';
import { StepsStateStore } from '../../../../wizard-begin/store/steps-state/steps-state.store';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit, ErrorHandler {

  public contact$: Observable<IContact>;
  public nextId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private contactListingStore: ContactListingStore,
    private stepsStateStore: StepsStateStore,
  ) {
  }

  public ngOnInit() {
    this.contact$ = this.route.params
      .switchMap((params: any) => this.contactListingStore.getContact(params.contactId));
  }

  public ngOnDestroy() {

  }

  handleError(error) {
    // do something with the exception
    console.log('error occurred in contact-detail-page.component',error);
  }  

}
