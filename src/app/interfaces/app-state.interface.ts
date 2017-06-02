import {IPlatforms, IVideoGameListing} from '../video-games/interfaces';
import {IUsers, IInboxItemListing} from '../inbox-items/interfaces';

export interface IAppState {
  readonly platforms: IPlatforms;
  readonly users: IUsers;
  readonly videoGameListing: IVideoGameListing;
  readonly inboxItemListing: IInboxItemListing;
}
