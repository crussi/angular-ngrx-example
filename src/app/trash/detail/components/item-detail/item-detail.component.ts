import { Component, Input } from '@angular/core';
import { IItem } from '../../../../shared/barrel';

@Component({
  selector: 'app-trash-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class TrashDetailComponent {

  @Input()
  public item: IItem;

  constructor() { }

}
