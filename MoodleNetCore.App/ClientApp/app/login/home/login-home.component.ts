import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'login-home',
    templateUrl: './login-home.component.html',
    styleUrls: ['./login-home.component.css']
})

export class LoginHomeComponent {

     constructor(private router: Router) { }

    goToSignUp() {
        this.router.navigate(['/login/register']);
    }
}