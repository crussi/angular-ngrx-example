import {IPlatforms, IVideoGameListing} from '../video-games/interfaces';
import {IUsers, IInboxItemListing} from '../inbox-items/interfaces';
import {ISteps, IStepsState} from '../wizard-begin/interfaces';

export interface IAppState {
  readonly platforms: IPlatforms;
  readonly users: IUsers;
  readonly videoGameListing: IVideoGameListing;
  readonly inboxItemListing: IInboxItemListing;
  readonly stepsBegin: ISteps;
  readonly stepsState: IStepsState;
}
