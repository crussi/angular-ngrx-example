import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore} from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'processnext',
  //templateUrl: './approvechange.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasOk" (click)="Ok(OkStep)">Ok</button>
      <button *ngIf="hasCancel" (click)="Cancel(CancelStep)">Cancel</button>
      <h1 [routerLink]="['/inboxItems']">Video Game Trailers</h1>
    </div>
  `,  
  styleUrls: ['./approvechange.component.css']
})
export class ProcessNext extends BaseComponent implements OnInit   {



  constructor(private store: StepsStateStore) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
  

}
