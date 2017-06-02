import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterStoreModule} from '@ngrx/router-store';

import {VideoGamesModule} from '../video-games/video-games.module';
import {InboxItemsModule} from '../inbox-items/inbox-items.module';
import {WizardBeginModule} from '../wizard-begin/wizard-begin.module';
import {SharedModule} from '../shared/shared.module';

import {rootRoutes} from './root.routes';
import {rootReducer} from '../store/root-reducer';

import {RootComponent} from './components';

import {PlatformsStore, VideoGameListingStore} from '../video-games/store/stores';
import {UsersStore, InboxItemListingStore} from '../inbox-items/store/stores';
import {ApiService} from './services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes),
    StoreModule.provideStore(rootReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    VideoGamesModule,
    InboxItemsModule,
    WizardBeginModule,
    SharedModule

  ],
  declarations: [
    RootComponent
  ],
  providers: [
    ApiService,
    PlatformsStore,
    UsersStore,
    VideoGameListingStore,
    InboxItemListingStore
  ],
  bootstrap: [RootComponent]
})
export class RootModule {
}
