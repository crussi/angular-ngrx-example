import { IListItem } from '../interfaces';

export class TrashItem implements IListItem {
    readonly id: string;
    readonly type: string;
    readonly description?: string;
    readonly userCreated?: string;
    readonly dateCreated?: Date;
    readonly userChanged?: string;
    readonly dateChanged?: Date;
}

export class SomedayItem implements IListItem {
    readonly id: string;
    readonly type: string;
    readonly description?: string;
    readonly userCreated?: string;
    readonly dateCreated?: Date;
    readonly userChanged?: string;
    readonly dateChanged?: Date;
    readonly reminderCycle: string;
    readonly reminderNext: string;
    readonly reminderCount: Number;
}

export class ReferenceItem implements IListItem {
    readonly id: string;
    readonly type: string;
    readonly description?: string;
    readonly userCreated?: string;
    readonly dateCreated?: Date;
    readonly userChanged?: string;
    readonly dateChanged?: Date;
    //put new properties here ...
}