import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IListItem } from '../interfaces/list-item/list-item.interface';

@Injectable()
export class ListItemsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(listType:string): Observable<Array<IListItem>> {
    //console.log('*** ListItemsService getAll', listType);
    let key: string = '';
    switch (listType) {
      case 'all':    
        key = '/594d9b141100002904d6d361';
        break;
      case 'trash':
        key = '/59542c360f00006100fc0c32';
        break;
      case 'someday':
        key = '/595440670f00005d00fc0c55';
        break;
      case 'reference':
        console.log('getAll reference')
        key = '/595595412900005a00cd7057';
        break;
      default:
        break;
    }
    console.log('key',key);
    return this.apiService.get(key);
  }

}
