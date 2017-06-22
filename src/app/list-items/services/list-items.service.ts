import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../root/services/api/api.service';
//import {IListItem} from '../interfaces/list-item/list-item.interface';
import { IListItem } from '../../shared/barrel';

@Injectable()
export class ListItemsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IListItem>> {
    return this.apiService.get('/593f27521000008b1347f335');
  }

}
