import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login.component";
import { LoginHomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";


const loginRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: LoginHomeComponent },
            { path: 'register', component: RegisterComponent },
            { path: '**', redirectTo: 'home' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LoginRoutingModule {

}