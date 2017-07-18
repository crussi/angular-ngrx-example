import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
import { IContact } from '../../../../contacts/interfaces';
import {ContactListingStore} from '../../../store/contact-listing/contact-listing.store';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {

  @Input()
  public contact: IContact;

  constructor(
    private location: Location,
    private contactListingStore: ContactListingStore
  ) { }

  public toggleFavorite() {
    this.contactListingStore.toggleFavorite(this.contact.id);
  }

  public goBack() {
    this.location.back();
  }

}
