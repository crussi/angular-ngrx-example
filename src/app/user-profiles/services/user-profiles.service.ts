import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../root/services/api/api.service';
import { IUserProfile } from '../../user-profiles/interfaces';

@Injectable()
export class UserProfilesService {

  constructor(private apiService: ApiService) {

  }

  public getAll(): Observable<Array<IUserProfile>> {
    return this.apiService.get('/596aa439110000c70901cdcc');
  }

}
