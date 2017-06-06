import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import {StepsBeginStore} from '../../store/steps-begin/steps-begin.store';

@Component({
  selector: 'nonactionable',
  //templateUrl: './nonactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <form #f="ngForm">
        <input type="radio" name="nonactionable" [(ngModel)]="this.state$.NonActionable" value="trash">Trash?<br>
        <input type="radio" name="nonactionable" [(ngModel)]="this.state$.NonActionable" value="someday">Someday/maybe?<br>
        <input type="radio" name="nonactionable" [(ngModel)]="this.state$.NonActionable" value="ref">Reference
      </form>      

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./nonactionable.component.css']
})
export class NonActionable extends BaseComponent implements OnInit   {

  state$: any;
  //nonactionable = "";

  constructor(private store: StepsBeginStore) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    // if (this.State){
    //   this.nonactionable = this.State;
    //   console.log('nonactionable this.State ', this.State);
    // }
    //Need to redo this ...
    //this.store.select(fromRoot.getSelectedStep).subscribe(stepState => this.state$ = stepState);    
  }

  Next(nextStep:StepEnum) {
    let val = {"NonActionable":this.state$.NonActionable};
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
