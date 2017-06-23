export interface IListItem {
  readonly id: string;
  readonly user?: string;
  readonly deletedBy?: string;
  readonly description?: string;
  readonly processed?: boolean;
  readonly dateEntered? : Date;
  readonly dateDeleted?: Date;
  prevId?: string;
  nextId?: string;
  nextaction?: string;
}

// export interface ILinkdId {
//   readonly id: string;
//   readonly prevId: string;
//   readonly nextId: string;
// }