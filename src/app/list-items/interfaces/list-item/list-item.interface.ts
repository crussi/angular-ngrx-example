
export interface IListItem {
  readonly id: string;
  readonly type: string;
  readonly user?: string;
  readonly description?: string;
  readonly dateEntered? : Date;
}

