import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";

import { LoginComponent } from "./login.component";
import { LoginHomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";

import { LoginService } from "./core/login.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent,
        LoginHomeComponent,
        RegisterComponent
    ],
    providers: [
        LoginService
    ]
})

export class LoginModule { }