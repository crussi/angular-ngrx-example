import { Type } from '@angular/core';
import { WizState } from './step.model';
//import { IStepsState } from '../../wizard-begin/interfaces';

export class InboxItem {    
    constructor(public id: string, public Description: string, public DateCreated: Date, public CreatedBy: string){}
}

export class InboxItemProcessed {    
    constructor(public id: string) {}
}

export class InboxItemNext {
    constructor(public id: string) { }
}


