import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IListItem } from '../../shared/barrel';

@Injectable()
export class ListItemsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(listType:string): Observable<Array<IListItem>> {
    console.log('*** ListItemsService getAll', listType);
    switch (listType) {
      case 'all':    
        return this.apiService.get('/594d9b141100002904d6d361');
      case 'trash':
        return this.apiService.get('/594d9b141100002904d6d361');
      default:
        break;
    }
  }

}
