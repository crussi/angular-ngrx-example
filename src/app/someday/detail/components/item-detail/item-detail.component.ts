import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IItem } from '../../../../shared/barrel';

@Component({
  selector: 'app-someday-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class SomedayDetailComponent {

  @Input()
  public item: Observable<IItem>;

  constructor() { }

}
