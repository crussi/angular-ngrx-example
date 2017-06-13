import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';

//import {VideoGamesContainerComponent} from './components';

import {StepsBeginService} from './services';
import {StepsStateStore} from './store/steps-state/steps-state.store';
//import {VideoGameListingModule} from './listing/listing.module';
//import {VideoGameDetailModule} from './detail/detail.module';
import { StepsBeginEffects, StepsStateEffects} from './store/effects';
import { WizardBeginner } from './components/wizard-beginner/wizard-beginner.component';
//import { YesNo } from './components/yesno/yesno.component';
import { ApproveChange, Delegate, Done, NewProject, NextAction, NonActionable, ProcessNext, ProjectPlan, 
         RefineAction, Schedule, YesNo} from './components';
import {WizardDirective} from './directives/wizard.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //VideoGameListingModule,
    //VideoGameDetailModule,
    EffectsModule.run(StepsBeginEffects),
    EffectsModule.run(StepsStateEffects),
  ],

  declarations: [
    //VideoGamesContainerComponent
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
