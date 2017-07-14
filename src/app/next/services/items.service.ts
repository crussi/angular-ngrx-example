import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IItem } from '../../shared/barrel';

@Injectable()
export class NextService {

  constructor(private apiService: ApiService) {}

  public getAll(): Observable<Array<IItem>> {
    return this.apiService.get('/5964566e2600007b0d3d732c');
  }

}
