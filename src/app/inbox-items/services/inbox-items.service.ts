import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../root/services/api/api.service';
import {IInboxItem} from '../interfaces/inbox-item/inbox-item.interface';

@Injectable()
export class InboxItemsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IInboxItem>> {
    //return this.apiService.get('/5895c537290000a31a3f4355');
    //return this.apiService.get('/59362e261000007e09f99b86');
    return this.apiService.get('/593630cb100000d109f99b8c');
  }

}
