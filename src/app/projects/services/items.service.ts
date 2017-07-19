import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IItem } from '../../shared/barrel';

@Injectable()
export class ProjectService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IItem>> {
    return this.apiService.get('/596ea5170f00000f082b81d9');
  }

}
