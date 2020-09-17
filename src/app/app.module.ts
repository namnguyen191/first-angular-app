import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BasicHighLightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './basic-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { RouterDemoComponent } from './router-demo/router-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    RouterDemoComponent,
    PageNotFoundComponent,
    ReactiveFormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
