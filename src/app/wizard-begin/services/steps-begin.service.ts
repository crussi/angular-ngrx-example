import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../root/services/api/api.service';
import {Step, StepState, StepEnum, StepSettings, StepOptions} from '../../shared/barrel';
import {ApproveChange} from '../components/approvechange/approvechange.component';
import {Delegate} from '../components/delegate/delegate.component';
import {Done} from '../components/done/done.component';
import {NewProject} from '../components/newproject/newproject.component';
import {NextAction} from '../components/nextaction/nextaction.component';
import {NonActionable} from '../components/nonactionable/nonactionable.component';
import { ProcessNext } from '../components/processnext/processnext.component';
import { ProjectPlan } from '../components/projectplan/projectplan.component';
import {RefineAction} from '../components/refineaction/refineaction.component';
import {Schedule} from '../components/schedule/schedule.component';
import {YesNo} from '../components/yesno/yesno.component';

@Injectable()
export class StepsBeginService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<Step>> {
    //actual
    //return this.apiService.get('/593307ae1300000006fa0b59');
    return Observable.of(
     [
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsActionable,
        "",
        "Is this actionable?",
        "",
        new StepOptions(
        StepEnum.IsProject, 
        StepEnum.NonActionable,
        undefined, 
        undefined, 
        undefined, 
        undefined)
        )
      ),
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsProject,
        "",
        "Does this require multiple steps?",
        "",
        new StepOptions(
        StepEnum.ProjectPlan, 
        StepEnum.NextAction,
        StepEnum.IsActionable, 
        undefined, 
        undefined, 
        undefined)
        )
      ),
      new Step(ProjectPlan,
      new StepSettings(
        StepEnum.ProjectPlan,
        "",
        "What is the successful outcome?",
        "Project created.",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsProject, 
        StepEnum.NewProject, 
        undefined, 
        undefined)
        )
      ),  
      new Step(NewProject,
      new StepSettings(
        StepEnum.NewProject,
        "Project created.",
        "Go to new project or continue processing inbox?",
        "",
        new StepOptions(
        StepEnum.Navigate, 
        StepEnum.Done,
        StepEnum.ProjectPlan, 
        undefined, 
        undefined, 
        undefined)
        )
      ),          
      new Step(NextAction,
      new StepSettings(
        StepEnum.NextAction,
        "",
        "What is the next action?",
        "",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsProject, 
        StepEnum.IsDoableNow, 
        undefined, 
        undefined)
        )
      ),           
      new Step(NonActionable,
      new StepSettings(
        StepEnum.NonActionable,
        "",
        "How would you categorize this?",
        "",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsActionable, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ),           
      new Step(ApproveChange,
      new StepSettings(
        StepEnum.ApproveChange,
        "",
        "Approve change?",
        "",
        new StepOptions(
        undefined, 
        undefined,
        undefined, 
        undefined, 
        StepEnum.Done, 
        StepEnum.Done)
        )
      ),           
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsDoableNow,
        "",
        "Can this be done in 2-5 minutes?",
        "",
        new StepOptions(
        StepEnum.DoItNow, 
        StepEnum.IsDelegatable,
        StepEnum.NextAction, 
        undefined, 
        undefined, 
        undefined)
        )
      ),           
      new Step(YesNo,
      new StepSettings(
        StepEnum.DoItNow,
        "Do it now!",
        "Did you do it?",
        "Task mark completed ...",
        new StepOptions(
        StepEnum.ApproveChange, 
        StepEnum.IsDelegatable,
        StepEnum.IsDoableNow, 
        undefined, 
        undefined, 
        undefined)
        )
      ),      
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsDelegatable,
        "",
        "Can this be delegated?",
        "",
        new StepOptions(
        StepEnum.Delegate, 
        StepEnum.IsSchedulable,
        StepEnum.IsDoableNow, 
        undefined, 
        undefined, 
        undefined)
        )
      ),      
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsSchedulable,
        "",
        "Does this need to be done on a specific date and time?",
        "",
        new StepOptions(
        StepEnum.Schedule, 
        StepEnum.RefineAction,
        StepEnum.IsDelegatable, 
        undefined, 
        undefined, 
        undefined)
        )
      ),      
      new Step(Schedule,
      new StepSettings(
        StepEnum.Schedule,
        "Create event ...",
        "",
        "",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsSchedulable, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ),  
      new Step(RefineAction,
      new StepSettings(
        StepEnum.RefineAction,
        "Please refine this task ...",
        "",
        "",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsSchedulable, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ), 
      new Step(Delegate,
      new StepSettings(
        StepEnum.Delegate,
        "Select delegate ...",
        "",
        "Delegate selected",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsSchedulable, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ),
      new Step(ProcessNext,
      new StepSettings(
        StepEnum.Done,
        "",
        "Continue processing inbox?",
        "",
        new StepOptions(
        undefined, 
        undefined,
        undefined, 
        undefined, 
        undefined, 
        StepEnum.Exit)
        )
      )  
           
    ]
    )
    //strings
    //console.log('inside StepsBeginService getAll()');
    //return this.apiService.get('/59332e19130000510afa0b66');
  }

  getStepStates() {
      let stepStates: Array<StepState> = new Array<StepState>();
      for (let item in StepEnum) {
          if (!isNaN(Number(item))) {
              //console.log('[' + item + '] = ' + StepEnum[item]);
              stepStates.push(new StepState(StepEnum[item],undefined));
          }
      } 
      return Observable.of(stepStates);   
  }  

}