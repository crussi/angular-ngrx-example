import { Component, Input } from '@angular/core';
import { IItem } from '../../../../shared/barrel';

@Component({
  selector: 'app-reference-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ReferenceDetailComponent {

  @Input()
  public item: IItem;

  constructor() { }

}
