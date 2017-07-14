import { Component, Input } from '@angular/core';

@Component({
    selector: 'fw-items-container',
    templateUrl: './items-container.component.html',
    styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent {

    @Input()
    public title: string;

    constructor() {}

}
