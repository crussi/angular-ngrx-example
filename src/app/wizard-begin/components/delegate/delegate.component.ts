import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import {StepsBeginStore} from '../../store/steps-begin/steps-begin.store';

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

  state$: any;
  constructor(private store: StepsBeginStore) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    //Need to redo this ...    
    //this.store.select(fromRoot.getSelectedStep).subscribe(stepState => this.state$ = stepState);
  }

  DelegateTo(delegate:string){
    this.state$.Delegate = delegate;
  }

  Next(nextStep:StepEnum) {
    //this.store.dispatch(new test.WizardTestAction());
    //super.StateChanged(nextStep, {Delegate:"Donald Duck"});
    //let val = {Delegate:"Donald Duck"};
    let val = {Delegate:this.state$.Delegate};
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
