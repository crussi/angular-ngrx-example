import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IItem } from '../../shared/barrel';

@Injectable()
export class DelegatedItemsService {

  constructor(private apiService: ApiService) {}

  public getAll(): Observable<Array<IItem>> {
    return this.apiService.get('/596456f02600008e0d3d732f');
  }

}
