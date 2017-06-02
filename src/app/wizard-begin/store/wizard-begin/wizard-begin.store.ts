import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IAppState } from '../../../interfaces/app-state.interface';
import { createAction } from '../../../store/create-action';

@Injectable()
export class InboxItemListingStore {

  public static LOAD = 'WIZARD_BEGIN_LOAD';
  public static STATECHANGE = 'WIZARD_BEGIN_STATECHANGE';

}