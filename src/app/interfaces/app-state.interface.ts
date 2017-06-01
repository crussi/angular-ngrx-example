import {IPlatforms, IVideoGameListing} from '../video-games/interfaces';
import {IInboxItemListing} from '../inbox-items/interfaces';

export interface IAppState {
  readonly platforms: IPlatforms;
  readonly videoGameListing: IVideoGameListing;
  readonly inboxItemListing: IInboxItemListing;
}
