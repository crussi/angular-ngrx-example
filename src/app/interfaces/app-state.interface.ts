import { IInboxItemListing } from '../inbox-items/interfaces';
import { INextActionListing } from '../next-actions/interfaces';
import { IDelegatedItemListing } from '../delegated-items/interfaces';
import { IUserProfileListing } from '../user-profiles/interfaces';
import {IListItemListing } from '../list-items/interfaces';
import {ISteps, IStepsState} from '../wizard-begin/interfaces';

export interface IAppState {
  readonly inboxItemListing: IInboxItemListing;
  readonly nextActionListing: INextActionListing;
  readonly delegatedItemListing: IDelegatedItemListing;
  readonly userProfileListing: IUserProfileListing;
  readonly listItemListing: IListItemListing;
  readonly trashItemListing: IListItemListing;
  readonly somedayItemListing: IListItemListing;
  readonly referenceItemListing: IListItemListing;
  readonly stepsBegin: ISteps;
  readonly stepsState: IStepsState;
}
