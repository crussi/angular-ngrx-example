import {Component, Input, OnChanges} from '@angular/core';
import {ILoadable} from '../../../shared/barrel';


@Component({
  selector: 'fw-loading-container',
  templateUrl: 'loading-container.component.html',
  styleUrls: ['loading-container.component.scss']
})
export class LoadingContainerComponent implements OnChanges {

  @Input()
  public loadable: ILoadable;

  public isLoading: boolean;
  public isError: boolean;
  public isOkay: boolean;

  public ngOnChanges() {
    this.isLoading = this.loadable ? this.loadable.isLoading : false;
    this.isError = this.loadable ? Boolean(this.loadable.loadingError) : false;
    this.isOkay = !this.isLoading && !this.isError;
  }

}
