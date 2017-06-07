import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'nonactionable',
  //templateUrl: './nonactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <form #f="ngForm">
        <input type="radio" name="nonactionable" [(ngModel)]="NonActionable" value="trash">Trash?<br>
        <input type="radio" name="nonactionable" [(ngModel)]="NonActionable" value="someday">Someday/maybe?<br>
        <input type="radio" name="nonactionable" [(ngModel)]="NonActionable" value="ref">Reference
      </form>      

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./nonactionable.component.css']
})
export class NonActionable extends BaseComponent implements OnInit   {

  //state$: any;
  NonActionable:string = "";

  constructor(private store: StepsStateStore) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.store.getState(this.Name).subscribe(stepState => {
      this.NonActionable = stepState.State ? stepState.State.NonActionable : '';
    })
  }

  Next(nextStep:StepEnum) {
    let val = {"NonActionable":this.NonActionable};
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    //this.store.dispatch(new action.StateChangeAction(stateChange));    
    this.store.stateChanged(stateChange);
  }
  StateChanged(nextStep:StepEnum, val:any) {
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    //this.store.dispatch(new action.StateChangeAction(stateChange));
    this.store.stateChanged(stateChange);
  } 
}
