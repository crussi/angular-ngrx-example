import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';

//import {VideoGamesContainerComponent} from './components';

import {StepsBeginService} from './services';
//import {VideoGameListingModule} from './listing/listing.module';
//import {VideoGameDetailModule} from './detail/detail.module';
import {StepsBeginEffects} from './store/effects';
import { WizardBeginner } from './components/wizard-beginner/wizard-beginner.component';
//import { YesNo } from './components/yesno/yesno.component';
import { Delegate, Done, NewProject, NextAction, NonActionable, ProjectPlan, 
         RefineAction, Schedule, YesNo} from './components';
import {WizardDirective} from './directives/wizard.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    //VideoGameListingModule,
    //VideoGameDetailModule,
    EffectsModule.run(StepsBeginEffects),
  ],

  declarations: [
    //VideoGamesContainerComponent
    WizardBeginner,
    Delegate, 
    Done, 
    NewProject, 
    NextAction, 
    NonActionable, 
    ProjectPlan, 
    RefineAction, 
    Schedule, 
    YesNo,
    WizardDirective
  ],
  providers: [
    StepsBeginService
  ],
  exports: [
    WizardBeginner,
    Delegate, 
    Done, 
    NewProject, 
    NextAction, 
    NonActionable, 
    ProjectPlan, 
    RefineAction, 
    Schedule, 
    YesNo
  ],
  entryComponents: [
    Delegate, 
    Done, 
    NewProject, 
    NextAction, 
    NonActionable, 
    ProjectPlan, 
    RefineAction, 
    Schedule, 
    YesNo
  ]
})
export class WizardBeginModule {

}
