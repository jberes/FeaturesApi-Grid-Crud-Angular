import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { GridViewComponent } from './grid-view/grid-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'grid-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'grid-view', component: GridViewComponent, data: { text: 'GridView' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
