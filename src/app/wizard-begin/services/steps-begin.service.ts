import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../root/services/api/api.service';
import {Step, StepState, StepEnum, StepSettings, StepOptions} from '../../shared/barrel';
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
      return stepStates;   
  }  

}
