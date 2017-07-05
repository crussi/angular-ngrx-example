//import { INextAction } from '../next-action/next-action.interface';
import { INextAction, ILinkdId } from '../../../shared/barrel';
import { INextActionFilters } from './next-action-filters.interface';
import { ILoadable } from '../../../loading/interfaces/loadable/loadable';

export interface INextActionListing extends ILoadable {
  filters: INextActionFilters;
  searchQuery: string;
  nextActions: Array<INextAction>;
  //linkedIds: Array<ILinkdId>
}

