import {IPlatforms, IVideoGameListing} from '../video-games/interfaces';
//import {IUsers, IInboxItemListing} from '../inbox-items/interfaces';
import { IInboxItemListing } from '../inbox-items/interfaces';
import { IUsers} from '../users/interfaces/users.interface';
import {IListItemListing } from '../list-items/interfaces';
import {ISteps, IStepsState} from '../wizard-begin/interfaces';

export interface IAppState {
  readonly platforms: IPlatforms;
  readonly users: IUsers;
  readonly videoGameListing: IVideoGameListing;
  readonly inboxItemListing: IInboxItemListing;
  readonly listItemListing: IListItemListing;
  readonly stepsBegin: ISteps;
  readonly stepsState: IStepsState;
}
