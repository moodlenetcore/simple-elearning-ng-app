import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from "./login-routing.module";

import { LoginComponent } from "./login.component";
import { LoginHomeComponent } from "./home/login-home.component";
import { RegisterComponent } from "./register/register.component";
import { CommonModule } from "@angular/common";

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
    ]
})

export class LoginModule { }