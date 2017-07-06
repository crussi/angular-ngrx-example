export interface INextAction {
    readonly id: string;
    readonly user?: string;
    readonly description?: string;
    readonly title: string;
    //readonly platform?: string;
    //readonly youtubeUrl?: string;
    //readonly imageUrl?: string;
    //readonly favorite?: boolean;
    readonly processed?: boolean;
    readonly dateEntered?: Date;
    prevId?: string;
    nextId?: string;
    nextaction?: string;
    // get displayText(): string {
    //   return this.nextaction ? this.nextaction : this.description;
    // }

}

