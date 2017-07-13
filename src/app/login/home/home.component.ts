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
    rememberMe: boolean = false;    
    generalErrors: any = null;
    
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
            }, (err) => {
                this.populateGeneralErrors(err);
            });
    }

    private populateGeneralErrors(errors) {
        try {
            errors.json();
            this.generalErrors = this.getParseServerErrorsToArray(errors.json());
        } catch (error) {
            this.generalErrors = ['Invalid login attempt.'];
        }
    }

    private getParseServerErrorsToArray(serverErrors) {
        let props = Object.getOwnPropertyNames(serverErrors);
        if (props.length == 0) { return [serverErrors]; }

        let result = [];
        for (var index = 0; index < props.length; index++) {
            var prop = serverErrors[props[index]];
            for (var subIndex = 0; subIndex < prop.length; subIndex++) {
                let sub = prop[subIndex];
                result.push(sub);
            }
        }
        return result;
    }
}