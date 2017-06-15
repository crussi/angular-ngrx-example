import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'nextaction',
  templateUrl: './nextaction.component.html',
  styleUrls: ['./nextaction.component.css']
})
export class NextAction extends BaseComponent implements OnInit   {

  constructor(private store: StepsStateStore, private fb: FormBuilder) { 
    super();
  }

  state: any;
  form: FormGroup;

  ngOnInit() {
    super.ngOnInit();
    this.store.getState(this.Name).subscribe(stepState => {
      this.state = stepState.State ? stepState.State : undefined;
      this.buildForm();
    });
  }

  buildForm(): void {
    let nextaction = this.state ? this.state.nextaction : undefined;
    this.form = this.fb.group({
      'nextaction': [nextaction, Validators.required]
    });
  } 
  onSubmit(): void {
    this.state = this.form.value;
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
