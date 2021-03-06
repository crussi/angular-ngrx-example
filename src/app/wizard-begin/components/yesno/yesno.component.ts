import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../../../shared/barrel';
import { WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'yesno',
  // templateUrl: './yesno.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasYes" (click)="StateChanged(YesStep,true)">Yes</button>
      <button *ngIf="hasNo" (click)="StateChanged(NoStep,false)">No</button>
      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
    </div>
  `,  
  styleUrls: ['./yesno.component.css']
})
export class YesNo extends BaseComponent implements OnInit   {

  constructor(private store: StepsStateStore) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();

  }

  StateChanged(nextStep:StepEnum, val:any) {
    //console.log('StateChange YesNo dispatch ...',this.store);
    //this.stateChanged.emit(new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep)));
    let transition: StepTransition = new StepTransition(this.Settings.Name, nextStep);
    transition.approveMsg = this.Settings.ApproveMsg;
    let stateChange: WizStateChange = new WizStateChange(this.Settings.Name, val, transition);
    //super.StateChanged(nextStep, val);
    //this.store.dispatch(new action.StateChangeAction(stateChange));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }

}
