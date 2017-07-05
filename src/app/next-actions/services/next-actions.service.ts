import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { INextAction } from '../../shared/barrel';

@Injectable()
export class NextActionsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<INextAction>> {
    return this.apiService.get('/594b46021200007309424929');
  }

}
