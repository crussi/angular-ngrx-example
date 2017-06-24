import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IListItem } from '../../shared/barrel';

@Injectable()
export class ListItemsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IListItem>> {
    console.log('*** ListItemsService getAll');
    return this.apiService.get('/594d9b141100002904d6d361');
  }

}
