import { IInboxItemListing } from '../inbox-items/interfaces';
//import { INextActionListing } from '../next-actions/interfaces';
//import { IDelegatedItemListing } from '../shared/barrel';
import { IItemListing } from '../shared/barrel';
//import { IUserProfileListing } from '../shared/interfaces/user-profile';
import { IUserProfileListing } from '../user-profiles/interfaces';
import { IContactListing } from '../contacts/interfaces';
//import {IListItemListing } from '../list-items/interfaces';
import {ISteps, IStepsState} from '../wizard-begin/interfaces';

export interface IAppState {
  readonly inboxItemListing: IInboxItemListing;
  readonly nextListing: IItemListing;
  readonly delegatedItemListing: IItemListing;
  readonly userProfileListing: IUserProfileListing;
  readonly userListing: IItemListing;
  readonly contactListing: IContactListing;
  //readonly listItemListing: IListItemListing;
  readonly projectListing: IItemListing;
  readonly trashListing: IItemListing;
  readonly somedayListing: IItemListing;
  readonly referenceListing: IItemListing;
  readonly stepsBegin: ISteps;
  readonly stepsState: IStepsState;
}
