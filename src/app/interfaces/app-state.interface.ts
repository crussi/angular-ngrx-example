import {IPlatforms, IVideoGameListing} from '../video-games/interfaces';
import { IInboxItemListing } from '../inbox-items/interfaces';
import { IUserProfileListing } from '../user-profiles/interfaces';
import {IListItemListing } from '../list-items/interfaces';
import {ISteps, IStepsState} from '../wizard-begin/interfaces';

export interface IAppState {
  readonly platforms: IPlatforms;
  readonly videoGameListing: IVideoGameListing;
  readonly inboxItemListing: IInboxItemListing;
  readonly userProfileListing: IUserProfileListing;
  readonly listItemListing: IListItemListing;
  readonly stepsBegin: ISteps;
  readonly stepsState: IStepsState;
}
