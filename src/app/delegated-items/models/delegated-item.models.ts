import { Type } from '@angular/core';
//import { WizState, StepState } from './step.model';

export class DelegatedItemProcessed {
    //constructor(public id: string, public stepStates: Array<StepState>) { }
    constructor(public id: string) { }
}

export class DelegatedItemNext {
    constructor(public id: string) { }
}


