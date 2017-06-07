import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition, StepState } from '../../../shared/barrel';
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
      <input type="text" placeholder="Outcome" [(ngModel)]="Outcome" >
      <input type="text" placeholder="Project title" [(ngModel)]="Title" >

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./projectplan.component.css']
})
export class ProjectPlan extends BaseComponent implements OnInit   {

  constructor(private store: StepsStateStore) { 
    super();
  }

  Outcome:string;
  Title:string;

  ngOnInit() {
    super.ngOnInit();
    this.store.getState(this.Name).subscribe(stepState => {
      this.Outcome = stepState.State ? stepState.State.Outcome : '';
      this.Title = stepState.State ? stepState.State.Title : '';
    });
  }

  Next(nextStep:StepEnum) {
    let val = { "Outcome" : this.Outcome, "Title": this.Title};

    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }

  StateChanged(nextStep:StepEnum, val:any) {
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }  

}
