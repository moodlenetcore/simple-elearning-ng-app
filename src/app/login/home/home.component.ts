import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LoginModel } from "../core/login.interface";

@Component({
    selector: 'login-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class LoginHomeComponent {
model: LoginModel = <LoginModel>{};
     constructor(private router: Router) { }

    register() {
        this.router.navigate(['/login/register']);
    }
}