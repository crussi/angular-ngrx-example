export interface IUserProfile {
    readonly id: string;
    readonly user?: string;
    readonly description?: string;
    readonly title: string;
    readonly processed?: boolean;
    readonly dateEntered?: Date;
    prevId?: string;
    nextId?: string;
    nextaction?: string;
}