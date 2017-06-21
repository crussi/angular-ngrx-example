import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition, StepState } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import { StepsStateStore } from '../../store/steps-state/steps-state.store';

@Component({
  selector: 'newproject',
  //templateUrl: './newproject.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input type="radio" formControlName="newproject" value="go">Go to new project<br>
        <input type="radio" formControlName="newproject" value="continue">Continue processing inbox<br>
        <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
        <button type="submit" [disabled]="!form.valid" *ngIf="hasNo">Next</button>
      </form>
      
    </div>
  `,  
  styleUrls: ['./newproject.component.css']
})
export class NewProject extends BaseComponent implements OnInit   {

  state$: Observable<StepState>;
  state: any;
  form: FormGroup;

  constructor(private store: StepsStateStore, private fb: FormBuilder) { 
    super();
    //this.state$ = store.select(fromRoot.getSelectedStep);
    //console.log('--> newproject:',this.state$);
  }

  ngOnInit() {
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
      'newproject': [val, Validators.required]
    });
  }  

  onSubmit(): void {
    //this.state = this.form.value;
    let transition: StepTransition;
    let approveMsg = "... this item will be sent to ";
    switch (this.form.value.newproject) {
      case "go":
        transition = new StepTransition(this.Settings.Name, this.Settings.Steps.YesStep);
        break;
      case "continue":
        transition = new StepTransition(this.Settings.Name, this.Settings.Steps.NoStep);
        break;
    }

    transition.approveMsg = approveMsg;
    let stateChange: WizStateChange = new WizStateChange(this.Settings.Name, this.form.value, transition);
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }

  ngAfterViewInit() {
    //console.log('newproject ngAfterViewInit');
  }
  ngAfterContentInit() {
    //console.log('newproject ngAfterContentInit');
  }  

  // Next(nextStep:StepEnum) {
  //   //super.StateChanged(nextStep, {'hello':'world'});
  //   let val = {'next':'inbox item'};
  //   let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
  //   super.EmitStateChanged(stateChange);
  //   this.store.stateChanged(stateChange);
  // }

  // Navigate(nextStep:StepEnum){
  //   //Navigate logic goes here
  //   //super.StateChanged(nextStep, {'navigate':'projects'});
  //   let val = {'navigate':'projects'};
  //   let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
  //   super.EmitStateChanged(stateChange);
  //   this.store.stateChanged(stateChange);
  // }

  StateChanged(nextStep:StepEnum, val:any) {
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.stateChanged(stateChange);
  }  

}
