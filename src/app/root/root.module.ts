import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';
import { InboxItemsModule } from '../inbox-items/inbox-items.module';
import { UserModule } from '../user/user.module';
import { SharedModule } from '../shared/shared.module';
import { rootRoutes } from './root.routes';
import { rootReducer } from '../store/root-reducer';
import { RootComponent } from './components';
import { InboxItemListingStore } from '../inbox-items/store/stores';
import { UserListingStore } from '../user/store/stores';
import { StepsBeginStore, StepsStateStore} from '../wizard-begin/store/stores';
import { ApiService} from './services';
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
    InboxItemsModule,
    UserModule,
    SharedModule

  ],
  declarations: [
    RootComponent
  ],
  providers: [
    ApiService,
    InboxItemListingStore,
    UserListingStore,
    StepsBeginStore,
    StepsStateStore,
    MessageService
  ],
  bootstrap: [RootComponent]
})
export class RootModule {
}
