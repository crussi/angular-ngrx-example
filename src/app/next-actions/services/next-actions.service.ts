import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
//import { INextAction } from '../../shared/barrel';
import { INextAction } from '../interfaces';

@Injectable()
export class NextActionsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<INextAction>> {
    return this.apiService.get('/595f075d0f00009c000eab5d');
  }

}
