import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaseComponent, ContainerComponent]
})
export class WizardBeginModule { }
