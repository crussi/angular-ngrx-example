import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IItem } from '../../shared/barrel';
//import { IDelegatedItem } from '../interfaces';

@Injectable()
export class DelegatedItemsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IItem>> {
    return this.apiService.get('/595f13690f0000b0000eab6e');
  }

}
