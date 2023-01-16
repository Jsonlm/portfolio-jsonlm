import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ViewComponent } from './development-languages/view/view.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DevelopmentLanguagesComponent } from './development-languages/development-languages.component';
import { LanguagesComponent } from './languages/languages.component';
import { TitlesComponent } from './titles/titles.component';
import { WorksExperiencesComponent } from './works-experiences/works-experiences.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    DevelopmentLanguagesComponent,
    LanguagesComponent,
    TitlesComponent,
    WorksExperiencesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports: [
    AboutMeComponent,
    DevelopmentLanguagesComponent,
    LanguagesComponent,
    TitlesComponent,
    WorksExperiencesComponent
  ]
})
export class FeaturesModule { }
