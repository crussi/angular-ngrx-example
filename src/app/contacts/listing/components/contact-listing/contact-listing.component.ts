import {Component, Input} from '@angular/core';
import { IContact } from '../../../../contacts/interfaces';

@Component({
  selector: 'app-contact-listing',
  templateUrl: 'contact-listing.component.html',
  styleUrls: ['contact-listing.component.scss']
})
export class ContactListingComponent {

  @Input()
  public contacts: Array<IContact>;

}
