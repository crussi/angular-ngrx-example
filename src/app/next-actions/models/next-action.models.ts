import { Type } from '@angular/core';
//import { WizState, StepState } from './step.model';

export class NextActionProcessed {
    //constructor(public id: string, public stepStates: Array<StepState>) { }
    constructor(public id: string) { }
}

export class NextActionNext {
    constructor(public id: string) { }
}


