import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ArticlesComponent } from './components/articles/articles.component';
import { SharedComponent } from './shared.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ArticlesComponent
  ]
})
export class SharedModule { }
