import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'refineaction',
  templateUrl: './refineaction.component.html',
  styleUrls: ['./refineaction.component.css']
})
export class RefineAction extends BaseComponent implements OnInit   {

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
    let refineaction = this.state ? this.state.refineaction : undefined;
    this.form = this.fb.group({
      'refineaction': [refineaction, Validators.required]
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
