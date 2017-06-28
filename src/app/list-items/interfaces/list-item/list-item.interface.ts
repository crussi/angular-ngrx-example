
export interface IListItem {
  readonly id: string;
  readonly user?: string;
  readonly description?: string;
  readonly dateEntered? : Date;
}

export class TrashItem implements IListItem {
  readonly id: string;
  readonly user?: string;
  readonly deletedBy?: string;
  readonly description?: string;
  readonly dateEntered? : Date;
  readonly dateDeleted?: Date;
}