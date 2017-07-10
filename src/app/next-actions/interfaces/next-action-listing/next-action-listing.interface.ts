//import { INextAction } from '../next-action/next-action.interface';
import { ILinkdId } from '../../../shared/barrel';
import { INextAction } from '../../interfaces';
import { INextActionFilters } from './next-action-filters.interface';
import { ILoadable } from '../../../shared/barrel';

export interface INextActionListing extends ILoadable {
  filters: INextActionFilters;
  searchQuery: string;
  nextActions: Array<INextAction>;
  linkedIds: Array<ILinkdId>
}

