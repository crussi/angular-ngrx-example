import { Type } from '@angular/core';
import { WizState, StepState } from './step.model';

export class InboxItemProcessed {    
    constructor(public id: string, public stepStates: Array<StepState>) {}
}

export class InboxItemNext {
    constructor(public id: string) { }
}


