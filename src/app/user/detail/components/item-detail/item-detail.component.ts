import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IItem } from '../../../../shared/barrel';

@Component({
  selector: 'app-user-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class UserDetailComponent {

  @Input()
  public item: Observable<IItem>;

  constructor(
  ) { 
  }

}
