import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import {StepsBeginStore} from '../../store/steps-begin/steps-begin.store';

@Component({
  selector: 'refineaction',
  //templateUrl: './refineaction.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <p>Refine action controls go here ....</p>
      <input type="text" placeholder="Enter a refine action" [(ngModel)]="state$.RefineAction" >

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./refineaction.component.css']
})
export class RefineAction extends BaseComponent implements OnInit   {

  constructor(private store: StepsBeginStore) { 
    super();
  }
  state$: any;

  ngOnInit() {
    super.ngOnInit();
    //Need to redo this ...
    //this.store.select(fromRoot.getSelectedStep).subscribe(stepState => this.state$ = stepState);    
  }

  Next(nextStep:StepEnum) {
    //super.StateChanged(nextStep, {'refineaction':'Refine action goes here'});
    let val = this.state$;
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
