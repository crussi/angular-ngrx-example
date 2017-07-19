import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { ProjectContainerComponent} from './components';
import { ProjectService } from './services';
import { ProjectListingModule} from './listing/listing.module';
import { ProjectDetailModule} from './detail/detail.module';
import { ProjectListingEffects } from './store';
import { ProjectListingStore } from './store';
import { projectRoutes } from './projects.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(projectRoutes),
    ProjectListingModule,
    ProjectDetailModule,
    EffectsModule.run(ProjectListingEffects),
  ],
  declarations: [
    ProjectContainerComponent,

  ],
  providers: [
    ProjectListingStore,
    ProjectService
  ]
})
export class ProjectsModule {

}
