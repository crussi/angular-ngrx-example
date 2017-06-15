import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      <form [formGroup]="form" (ngSubmit)="onSubmit()">      
        <p>Delegate controls go here ....</p>
          <select formControlName="delegate">
            <option value='Donald Duck'>Donald Duck</option>
            <option value='Daffy Duck'>Daffy Duck</option>
            <option value='Micky Mouse'>Micky Mouse</option>
            <option value='Minnie Mouse'>Minnie Mouse</option>
          </select>
        <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
        <button type="submit" [disabled]="!form.valid" *ngIf="hasNext">Next</button>
      </form>
    </div>
  `,  
  styleUrls: ['./delegate.component.css']
})
export class Delegate extends BaseComponent implements OnInit   {

  state: any;
  form: FormGroup;

  constructor(private store: StepsStateStore, private fb: FormBuilder) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.store.getState(this.Name).subscribe(stepState => {
      this.state = stepState.State ? stepState.State : undefined;
      this.buildForm();
    });
  }

  buildForm(): void {
    let delegate = this.state ? this.state.delegate : undefined;
    this.form = this.fb.group({
      'delegate': [delegate, Validators.required],
    });
  } 

  // DelegateTo(delegate:string){
  //   this.Delegate = delegate;
  // }

  // Next(nextStep:StepEnum) {
  //   let val = {Delegate:this.Delegate};
  //   let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
  //   super.EmitStateChanged(stateChange);
  //   this.store.stateChanged(stateChange);
    
  // }

  onSubmit(): void {
    this.state = this.form.value;
    console.log('onSubmit',this.state);
    let stateChange: WizStateChange = new WizStateChange(this.Settings.Name, this.state, new StepTransition(this.Settings.Name, this.NextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }

  StateChanged(nextStep:StepEnum, val:any) {
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }   
}
