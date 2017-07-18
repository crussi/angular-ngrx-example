import {Input, Component} from '@angular/core';
import { IContact } from '../../../../contacts/interfaces';
import {ContactListingStore} from '../../../store/contact-listing/contact-listing.store';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent {

  @Input()
  public contact: IContact;

  constructor(private contactListingStore: ContactListingStore) { }

  public toggleContactFavorite() {
    this.contactListingStore.toggleFavorite(this.contact.id);
  }

}
