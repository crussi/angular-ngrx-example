
export interface IContact {
  readonly id: string;
  readonly user?: string;
  readonly name?: string;
  readonly email?: string;
  readonly sms?: string;
  readonly userCreated?: string;
  readonly dateCreated?: Date;
  readonly userChanged?: string;
  readonly dateChanged?: Date;
  prevId?: string;
  nextId?: string;
}