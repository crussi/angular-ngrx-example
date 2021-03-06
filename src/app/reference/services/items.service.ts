import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IItem } from '../../shared/barrel';

@Injectable()
export class ReferenceService {

  constructor(private apiService: ApiService) {}

  public getAll(): Observable<Array<IItem>> {
    return this.apiService.get('/59645767260000970d3d7331');
  }

}
