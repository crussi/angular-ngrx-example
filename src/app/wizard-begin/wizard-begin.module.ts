import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StepsBeginService} from './services';
import {StepsStateStore} from './store/steps-state/steps-state.store';
import { StepsBeginEffects, StepsStateEffects} from './store/effects';
import { WizardBeginner } from './components/wizard-beginner/wizard-beginner.component';
import { ApproveChange, Delegate, Done, NewProject, NextAction, NonActionable, ProcessNext, ProjectPlan, 
         RefineAction, Schedule, YesNo} from './components';
import {WizardDirective} from './directives/wizard.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    EffectsModule.run(StepsBeginEffects),
    EffectsModule.run(StepsStateEffects),
  ],

  declarations: [
    WizardBeginner,
    ApproveChange, 
    Delegate, 
    Done, 
    NewProject, 
    NextAction, 
    NonActionable, 
    ProcessNext,
    ProjectPlan, 
    RefineAction, 
    Schedule, 
    YesNo,
    WizardDirective
  ],
  providers: [
    StepsBeginService,
    StepsStateStore
  ],
  exports: [
    WizardBeginner,
    ApproveChange, 
    Delegate, 
    Done, 
    NewProject, 
    NextAction, 
    NonActionable, 
    ProcessNext,
    ProjectPlan, 
    RefineAction, 
    Schedule, 
    YesNo
  ],
  entryComponents: [
    ApproveChange, 
    Delegate, 
    Done, 
    NewProject, 
    NextAction, 
    NonActionable, 
    ProcessNext,
    ProjectPlan, 
    RefineAction, 
    Schedule, 
    YesNo
  ]
})
export class WizardBeginModule {

}
