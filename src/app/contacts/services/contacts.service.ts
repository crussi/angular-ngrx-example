import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IContact } from '../../contacts/interfaces';

@Injectable()
export class ContactsService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IContact>> {
    console.log('ContactsService');
    return this.apiService.get('/596d4c08100000cc057e23bb');
  }

}
