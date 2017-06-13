import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore} from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'processnext',
  //templateUrl: './processnext.component.html',
  template: `
    <div>
      
      <div style="display:inline-block; margin-top: 30px"><label *ngIf="hasQuestion">{{Question}}</label>
        <button style="margin-left: 20px" *ngIf="hasCancel" [routerLink]="['/inboxItems/listing']">No</button>
      </div>
      <h3>Go to ...</h3>
      <button [disabled]="!hasPrevInboxItemId" [routerLink]="['/inboxItems/',PrevInboxItemId]">Previous</button>
      <button [disabled]="!hasNextInboxItemId" [routerLink]="['/inboxItems/',NextInboxItemId]">Next</button>
    </div>
  `,
  styleUrls: ['./processnext.component.css']
})
export class ProcessNext extends BaseComponent implements OnInit   {

  constructor(private store: StepsStateStore) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }


}
