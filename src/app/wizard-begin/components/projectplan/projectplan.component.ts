import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';
import { IStepsState } from '../../interfaces/steps-begin/steps-begin.interface';

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

  state$: Observable<IStepsState>;
  constructor(private store: StepsStateStore) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    //Need to redo this ...
    //this.store.select(fromRoot.getSelectedStep).subscribe(stepState => this.state$ = stepState);
    //this.store.getState().subscribe(stepState => this.state$ = stepState);
    this.state$ = this.store.getState(this.Name);
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
