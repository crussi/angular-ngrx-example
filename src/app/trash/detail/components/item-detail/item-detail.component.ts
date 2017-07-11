import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from '../../../../shared/barrel';

@Component({
  selector: 'app-trash-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class TrashDetailComponent {

  @Input()
  public item: IItem;

  constructor(
    private route: ActivatedRoute    
  ) { 
    console.log('trash item-detail route',route);
    console.log(route.snapshot.url); // array of states
    console.log(route.snapshot.url[0].path); 
  }

}
