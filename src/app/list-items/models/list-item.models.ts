import { IListItem } from '../interfaces';

export class TrashItem implements IListItem {
    readonly id: string;
    readonly type: string;
    readonly user?: string;
    readonly deletedBy?: string;
    readonly description?: string;
    readonly dateEntered?: Date;
    readonly dateDeleted?: Date;
}

export class SomedayItem implements IListItem {
    readonly id: string;
    readonly type: string;
    readonly user?: string;
    readonly description?: string;
    readonly dateEntered?: Date;
    readonly datePostponed?: Date;
    readonly reminderCycle: string;
    readonly reminderNext: string;
    readonly reminderCount: Number;
}

export class ReferenceItem implements IListItem {
    readonly id: string;
    readonly type: string;
    readonly user?: string;
    readonly description?: string;
    readonly dateEntered?: Date;
    //put new properties here ...
}