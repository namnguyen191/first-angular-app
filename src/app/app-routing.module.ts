import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { RouterDemoComponent } from './router-demo/router-demo.component';
import { ServerResolverService } from './server/server-resolver.service';
import { ServersComponent } from './servers/servers.component';

const appRoutes: Routes = [
  { path: '', component: ServersComponent, resolve: {server: ServerResolverService} },
  { path: 'demo', component: RouterDemoComponent, canActivate: [AuthGuard] },
  {
    path: 'demo/:id',
    component: RouterDemoComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'nested', component: RouterDemoComponent }],
  },
  { path: 'form', component: ReactiveFormDemoComponent },
  { path: 'not-found', component: PageNotFoundComponent, data: { msg: 'Page Not Found'} },
  { path: 'something', redirectTo: '/not-found' },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  // Enable useHash to give route handling to Angular and prevent server to serve 404 not found
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
