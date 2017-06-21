import { Type } from '@angular/core';
import { WizState, StepState } from './step.model';
//import { IStepsState } from '../../wizard-begin/interfaces';

// export class InboxItem {
//     get DisplayText(): string {
//         return this.NextAction ? this.NextAction : this.Description;
//     }
//     public NextAction: string;   
//     constructor(public id: string, public Description: string, public DateCreated: Date, public CreatedBy: string){}
// }

export class InboxItemProcessed {    
    constructor(public id: string, public stepStates: Array<StepState>) {}
}

export class InboxItemNext {
    constructor(public id: string) { }
}


