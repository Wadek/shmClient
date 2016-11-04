import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { HomeComponent }               from './Components/homeComponent/home.component';
import {dashboardComponent }                from './Components/dashboard/dashboard';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
    {path: 'dashboardComponent', component: dashboardComponent},
  //{ path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

