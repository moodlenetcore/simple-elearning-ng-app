import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { LoginModule } from "./login/login.module";

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'login', loadChildren: () => LoginModule },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
