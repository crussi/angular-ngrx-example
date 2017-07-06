import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IListItem } from '../interfaces';
import { ListTypeEnum } from '../models';

@Injectable()
export class ListItemsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(listType: ListTypeEnum): Observable<Array<IListItem>> {
    //console.log('*** ListItemsService getAll', listType);
    let key: string = '';
    switch (listType) {
      case ListTypeEnum.Trash:
        key = '/595d9833100000a6007c1745';
        break;
      case ListTypeEnum.Someday:
        key = '/595d9d5d100000ae007c174d';
        break;
      case ListTypeEnum.Reference:
        console.log('getAll reference')
        key = '/595d9d32100000a2007c174b';
        break;
      default:
        break;
    }
    console.log('key',key);
    return this.apiService.get(key);
  }

}
