import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore} from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'approvechange',
  //templateUrl: './approvechange.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasOk" (click)="Ok(OkStep)">Ok</button>
      <button *ngIf="hasCancel" (click)="Cancel(CancelStep)">Cancel</button>
    </div>
  `,  
  styleUrls: ['./approvechange.component.css']
})
export class ApproveChange extends BaseComponent implements OnInit   {

  constructor(private store: StepsStateStore) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
  
  Ok(step:StepEnum){
    //console.log('ok logic goes here');
    //super.LoadStep(step)
    //super.EmitStateChanged(step,{'hello':'ok world'});
    let val = {'approve':'ok'};
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,step));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
    
  }

  Cancel(step:StepEnum){
    //console.log('cancel logic goes here');
    let val = {'approve':'ok'};
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,step));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }

}
