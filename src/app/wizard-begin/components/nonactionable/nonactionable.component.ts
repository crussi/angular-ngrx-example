import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'nonactionable',
  templateUrl: './nonactionable.component.html',
  styleUrls: ['./nonactionable.component.css']
})
export class NonActionable extends BaseComponent implements OnInit   {

  state:any;
  form: FormGroup;

  constructor(private store: StepsStateStore, private fb: FormBuilder) { 
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.store.getState(this.Name).subscribe(stepState => {
      console.log('nonactionable stepState changed', stepState);
      this.state = stepState.State ? stepState.State : undefined;
      this.buildForm();
    });
  }

  buildForm(): void {
    let val = this.state ? this.state.nonactionable : undefined;
    this.form = this.fb.group({
      'nonactionable': [val, Validators.required]
    });
  }  

  onSubmit(): void {
    //this.state = this.form.value;
    let transition: StepTransition = new StepTransition(this.Settings.Name, this.NextStep);
    let approveMsg = "... this item will be sent to ";
    switch (this.form.value.nonactionable) {
      case "trash":
        approveMsg += "Trash.";
        break;
      case "someday":
        approveMsg += "Someday/maybe.";
        break;
      case "reference":
        approveMsg += "Reference.";
        break;
    }
    
    transition.approveMsg = approveMsg;
    let stateChange: WizStateChange = new WizStateChange(this.Settings.Name, this.form.value, transition);
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);  
  }

  StateChanged(nextStep: StepEnum, val: any): void {
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  } 
}
