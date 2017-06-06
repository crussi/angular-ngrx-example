import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition, StepState } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import {StepsBeginStore} from '../../store/steps-begin/steps-begin.store';

@Component({
  selector: 'projectplan',
  //templateUrl: './projectplan.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <input type="text" placeholder="Outcome" [(ngModel)]="state$.Outcome" >
      <input type="text" placeholder="Project title" [(ngModel)]="state$.Title" >

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./projectplan.component.css']
})
export class ProjectPlan extends BaseComponent implements OnInit   {

  state$: any;
  constructor(private store: StepsBeginStore) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    //Need to redo this ...
    //this.store.select(fromRoot.getSelectedStep).subscribe(stepState => this.state$ = stepState);
  }

  Next(nextStep:StepEnum) {
    //let val = this.state$;
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, this.state$,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }

  StateChanged(nextStep:StepEnum, val:any) {
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }  

}
