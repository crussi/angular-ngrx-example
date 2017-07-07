export interface INextAction {
    readonly id: string;
    readonly type: string;
    readonly description?: string;
    readonly nextaction?: string;
    readonly processed?: boolean;
    readonly userCreated?: string;
    readonly dateCreated?: Date;
    readonly userChanged?: string;
    readonly dateChanged?: Date;
    prevId?: string;
    nextId?: string;
}

