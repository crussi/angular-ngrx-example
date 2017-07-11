import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IItem } from '../../shared/barrel';

@Injectable()
export class NextService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IItem>> {
    return this.apiService.get('/595f075d0f00009c000eab5d');
  }

}
