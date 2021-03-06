import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';
<% if (!skipAutoGeneratedComponent) { %>
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
<% } %>
export const routes: Routes = [<% if (!skipAutoGeneratedComponent || sample) { %>
  {
      path: '',
      redirectTo: <% if (sample) { %>'/players'<% } else if (!skipAutoGeneratedComponent) { %>'/auto-generated'<% } %>,
      pathMatch: 'full',
  },<% if (!skipAutoGeneratedComponent) { %>
  {
      path: 'auto-generated',
      component: AutoGeneratedComponent,
  },<% } %>
<% } %>];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
