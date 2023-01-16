import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(
      './shared/shared.module'
    )
      .then(mod => mod.SharedModule),
  },
  {
    path: '',
    loadChildren: () => import(
      './features/features.module'
    )
      .then(mod => mod.FeaturesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
