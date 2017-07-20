import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IItem } from '../../shared/barrel';

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IItem>> {
    return this.apiService.get('/596aa439110000c70901cdcc');
  }

}
