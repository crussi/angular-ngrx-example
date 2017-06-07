import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'delegate',
  //templateUrl: './delegate.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <p>Delegate controls go here ....</p>
        <ul>
          <li (click)="DelegateTo('Donald Duck')">Donald Duck</li>
          <li (click)="DelegateTo('Daffy Duck')">Daffy Duck</li>
          <li (click)="DelegateTo('Micky Mouse')">Micky Mouse</li>
          <li (click)="DelegateTo('Minnie Mouse')">Minnie Mouse</li>
        </ul>
      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./delegate.component.css']
})
export class Delegate extends BaseComponent implements OnInit   {

  constructor(private store: StepsStateStore) { 
    super();
  }
  Delegate: string;

  ngOnInit() {
    super.ngOnInit();
    this.store.getState(this.Name).subscribe(stepState => {
      this.Delegate = stepState.State ? stepState.State.Delegate : '';
    })
  }

  DelegateTo(delegate:string){
    this.Delegate = delegate;
  }

  Next(nextStep:StepEnum) {
    let val = {Delegate:this.Delegate};
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
