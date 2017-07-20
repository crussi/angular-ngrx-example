import {Component, Output, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-contact-search',
  templateUrl: 'contact-search.component.html',
  styleUrls: ['contact-search.component.scss']
})
export class ContactSearchComponent {

  @Output()
  private queryChanged = new EventEmitter<string>();

  private query$: Subject<string> = new Subject<string>();

  constructor() {
    this.query$
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(query => this.queryChanged.emit(query));
  }

  public onChange(query: string) {
    this.query$.next(query);
  }

}