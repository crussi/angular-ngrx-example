import { Type } from '@angular/core';
//import { WizState, StepState } from './step.model';

export class ItemProcessed {
    //constructor(public id: string, public stepStates: Array<StepState>) { }
    constructor(public id: string) { }
}

export class ItemNext {
    constructor(public id: string) { }
}


