import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IItem } from '../../shared/barrel';

@Injectable()
export class ContactService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IItem>> {
    return this.apiService.get('/596d4c08100000cc057e23bb');
  }

}
