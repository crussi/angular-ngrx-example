import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../root/services/api/api.service';
//import {IInboxItem} from '../interfaces/inbox-item/inbox-item.interface';
import { IInboxItem } from '../../shared/barrel';

@Injectable()
export class InboxItemsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IInboxItem>> {
    return this.apiService.get('/593f27521000008b1347f335');
  }

}
