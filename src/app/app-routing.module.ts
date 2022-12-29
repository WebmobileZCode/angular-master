import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  { path: '', redirectTo: 'directives', pathMatch: 'full' },

  { path: 'directives', component: DirectivesComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
