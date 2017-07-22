import { IInboxItemListing } from '../inbox-items/interfaces';
import { IItemListing } from '../shared/barrel';
import { IContactListing } from '../contacts/interfaces';
import {ISteps, IStepsState} from '../wizard-begin/interfaces';

export interface IAppState {
  readonly inboxItemListing: IInboxItemListing;
  readonly nextListing: IItemListing;
  readonly delegatedItemListing: IItemListing;
  readonly userListing: IItemListing;
  readonly contactListing: IContactListing;
  readonly projectListing: IItemListing;
  readonly trashListing: IItemListing;
  readonly somedayListing: IItemListing;
  readonly referenceListing: IItemListing;
  readonly stepsBegin: ISteps;
  readonly stepsState: IStepsState;
}
