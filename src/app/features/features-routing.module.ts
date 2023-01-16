import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  {
    path: 'about-me',
    loadChildren: () => import(
      './about-me/about-me.module'
    )
      .then(mod => mod.AboutMeModule),
  },
  {
    path: 'dev-lang',
    loadChildren: () => import(
      './development-languages/development-languages.module'
    )
      .then(mod => mod.DevelopmentLanguagesModule),
  },
  {
    path: 'languages',
    loadChildren: () => import(
      './languages/languages.module'
    )
      .then(mod => mod.LanguagesModule),
  },
  {
    path: 'titles',
    loadChildren: () => import(
      './titles/titles.module'
    )
      .then(mod => mod.TitlesModule),
  },
  {
    path: 'works-xp',
    loadChildren: () => import(
      './works-experiences/works-experiences.module'
    )
      .then(mod => mod.WorksExperiencesModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
