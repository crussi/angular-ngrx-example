import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IUserProfile } from '../../shared/barrel';

@Injectable()
export class UserProfilesService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IUserProfile>> {
    return this.apiService.get('/594ef7e9100000c707af3f8f');
  }

}
