import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'refineaction',
  //templateUrl: './refineaction.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <p>Refine action controls go here ....</p>
      <input type="text" placeholder="Enter a refine action" [(ngModel)]="RefineAction" >

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./refineaction.component.css']
})
export class RefineAction extends BaseComponent implements OnInit   {

  constructor(private store: StepsStateStore) { 
    super();
  }
  RefineAction: string;

  ngOnInit() {
    super.ngOnInit();
    this.store.getState(this.Name).subscribe(stepState => {
      this.RefineAction = stepState.State ? stepState.State.RefineAction : '';
    })
  }

  Next(nextStep:StepEnum) {
    let val = { "RefineAction": this.RefineAction };
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
