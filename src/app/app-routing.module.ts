import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ReactiveComponent } from './reactive/reactive.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path: 'template-driven-forms',
    component: TemplateFormComponent
  },
  {
    path: 'reactive-forms',
    component: DataFormComponent
  },
  {
    path: 'reactive-forms-new',
    component: ReactiveComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reactive-forms'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
