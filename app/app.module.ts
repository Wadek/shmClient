import { NgModule }            from '@angular/core';
import { BrowserModule  }      from '@angular/platform-browser';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent }        from './app.component';
import { HomeComponent }       from './Components/homeComponent/home.component';
import { routing,
         appRoutingProviders } from './app.routes';
import {RouterModule} from '@angular/router';
import {dashboardComponent }                from './Components/dashboard/dashboard';
import { UploadModal } from './Modals/UploadModal/uploadModal';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        dashboardComponent
    ],
    providers:    [
        appRoutingProviders,
        AUTH_PROVIDERS
    ],
    imports:      [
        BrowserModule,
        routing,
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
