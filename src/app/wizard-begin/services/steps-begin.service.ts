import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../root/services/api/api.service';
import {StepState, StepEnum} from '../../shared/barrel';
@Injectable()
export class StepsBeginService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<string>> {
    return this.apiService.get('/593307ae1300000006fa0b59');
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
