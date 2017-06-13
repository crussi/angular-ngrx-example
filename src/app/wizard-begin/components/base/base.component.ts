import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepEnum } from '../../../shared/barrel';
import { StepTransition, StepSettings, WizStateChange, StepState } from '../../../shared/barrel';


@Component({
  selector: 'base',
  //templateUrl: './base.component.html',
  template: `
    <div></div>
  `,  
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit  {
  //Data: any;
  @Input() Settings: StepSettings;
  @Input() State: any;
  //@Input() trigger: Number;
  // @Output() stepChanged: EventEmitter<StepTransition> = new EventEmitter();
  @Output() stateChanged: EventEmitter<WizStateChange> = new EventEmitter();

  //constructor() { }
  get Name(): StepEnum {
    return this.Settings.Name;
  }
  get Question(): string {
    return this.Settings.Question;
  }
  get hasQuestion(): boolean {
    return this.Settings.Question.length > 0;
  }  
  get Declaration(): string {
    return this.Settings.Declaration;
  }
  get hasDeclaration(): boolean {
    return this.Settings.Declaration.length > 0;
  }   
  get YesStep(): StepEnum {
    return this.Settings.Steps.YesStep;
  }
  get hasYes(): boolean {
    return this.Settings.Steps.hasYes;
  }
  get NoStep(): StepEnum {
    return this.Settings.Steps.NoStep;
  }
  get hasNo(): boolean {
    return this.Settings.Steps.hasNo;
  } 
  get PrevStep(): StepEnum {
    return this.Settings.Steps.PrevStep;
  }
  get hasPrev(): boolean {
    return this.Settings.Steps.hasPrev;
  }         
  get NextStep(): StepEnum {
    return this.Settings.Steps.NextStep;
  }
  get hasNext(): boolean {
    return this.Settings.Steps.hasNext;
  }  
  get OkStep(): StepEnum {
    return this.Settings.Steps.OkStep;
  }
  get hasOk(): boolean {
    return this.Settings.Steps.hasOk;
  }     
  get CancelStep(): StepEnum {
    return this.Settings.Steps.CancelStep;
  }
  get hasCancel(): boolean {
    return this.Settings.Steps.hasCancel;
  } 
  get hasNextInboxItemId(): boolean {
    return this.Settings.nextInboxItemId != "0";
  }
  get NextInboxItemId(): string {
    return this.Settings.nextInboxItemId;
  }
  get hasPrevInboxItemId(): boolean {
    return this.Settings.prevInboxItemId != "0";
  }
  get PrevInboxItemId(): string {
    return this.Settings.prevInboxItemId;
  }


  ngOnInit() {
    //this.Initialize();
  }

  // LoadStep(step:StepEnum) {
  //   console.log('LoadStep:' + step);
  //   this.stepChanged.emit(new StepTransition(this.Settings.Name, step));
  // }

  // StateChanged(change:WizStateChange) {
  //   this.stateChanged.emit(change);
  // }
  
  // StateChanged(nextStep:StepEnum, val: any) {
  //   this.stateChanged.emit(new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep)));
  // }

  EmitStateChanged(stateChange:WizStateChange) {
    this.stateChanged.emit(stateChange);
  }
}
