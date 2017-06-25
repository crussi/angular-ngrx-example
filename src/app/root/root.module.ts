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
import { UserProfilesModule } from '../user-profiles/user-profiles.module';
import { ListItemsModule } from '../list-items/list-items.module';
import {SharedModule} from '../shared/shared.module';
import {rootRoutes} from './root.routes';
import {rootReducer} from '../store/root-reducer';
import {RootComponent} from './components';
import {PlatformsStore, VideoGameListingStore} from '../video-games/store/stores';
import { InboxItemListingStore } from '../inbox-items/store/stores';
import { UserProfileListingStore } from '../user-profiles/store/stores';
import { UsersStore } from '../users/store/users.store';
import {ListItemListingStore } from '../list-items/store/stores';
import {StepsBeginStore, StepsStateStore} from '../wizard-begin/store/stores';
import {ApiService} from './services';
import { MessageService } from '../shared/services/message.service';

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
    UserProfilesModule,
    ListItemsModule,
    //WizardBeginModule,
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
    InboxItemListingStore,
    UserProfileListingStore,
    ListItemListingStore,
    StepsBeginStore,
    StepsStateStore,
    MessageService
  ],
  bootstrap: [RootComponent]
})
export class RootModule {
}
