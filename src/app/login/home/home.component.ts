import { Component } from '@angular/core';
import { HttpService } from "../../common/services/http.service";
import { LoginModel } from "../core/login.interface";
import { LoginService } from "../core/login.service";

@Component({
    selector: 'login-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class LoginHomeComponent {
    model: LoginModel = <LoginModel>{};

    constructor(
        private http: HttpService,
        private loginService: LoginService) { }

    register() {
        this.http.navigateTo(['/login/register']);
    }

    forgotPassword() {
        this.http.navigateTo(['/login/forgotPassword']);
    }

    login() {
        this.loginService.login(this.model)
            .subscribe((res) => {
                this.http.navigateTo(['/profile/home']);
            });
    }
}