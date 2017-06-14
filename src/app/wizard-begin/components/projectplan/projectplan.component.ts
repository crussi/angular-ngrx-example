import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition, StepState } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';
import { IStepsState } from '../../interfaces/steps-begin/steps-begin.interface';

@Component({
  selector: 'projectplan',
  templateUrl: './projectplan.component.html',
  styleUrls: ['./projectplan.component.css']
})
export class ProjectPlan extends BaseComponent implements OnInit {

  state: any;
  form: FormGroup;

  constructor(private store: StepsStateStore, private fb: FormBuilder) { 
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.store.getState(this.Name).subscribe(stepState => {
    this.state = stepState.State ? stepState.State : undefined;
    this.buildForm();
      
    });
  }

  buildForm(): void {
    let outcome = this.state ? this.state.outcome : undefined;
    let title = this.state ? this.state.title : undefined;
    this.form = this.fb.group({
      'outcome': [outcome, Validators.required],
      'title': [title, Validators.required]
    });
  } 
  onSubmit(): void {
    this.state = this.form.value;
    let stateChange: WizStateChange = new WizStateChange(this.Settings.Name, this.state, new StepTransition(this.Settings.Name, this.NextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }

  StateChanged(nextStep: StepEnum, val: any): void {
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }  

}
