export interface IItem {
    readonly id: string;
    readonly type: string;
    readonly description?: string;
    readonly nextaction?: string;
    readonly name?: string;
    readonly done?: boolean;
    readonly userCreated?: string;
    readonly dateCreated?: Date;
    readonly userChanged?: string;
    readonly dateChanged?: Date;
    prevId?: string;
    nextId?: string;
}

export interface INavagableItem {
    prevId?: string;
    nextId?: string;
}