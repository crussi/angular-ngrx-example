
export interface IListItem {
  readonly id: string;
  readonly type: string;
  readonly description?: string;
  readonly userCreated?: string;
  readonly dateCreated? : Date;
  readonly dateChanged?: Date;
  readonly userChanged?: string;
}

