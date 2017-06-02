import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../root/services/api/api.service';
import {IInboxItem} from '../interfaces/inbox-item/inbox-item.interface';

@Injectable()
export class InboxItemsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IInboxItem>> {
    return this.apiService.get('/5895c537290000a31a3f4355');
  }

}
