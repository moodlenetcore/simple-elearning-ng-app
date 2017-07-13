import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterModel, FormStatus } from "./../core/login.interface";
import { LoginService } from "app/login/core/login.service";
import { HttpService } from "app/common/services/http.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    showPassword: boolean;
    agreeTermOfUse: boolean;
    registerModel = <RegisterModel>{};
    generalErrors: any = null;
    formErrors = {
        'email': '',
        'password': ''
    };

    private validationMessages = {
        'email': {
            'required': 'This field is required',
            'invalidEmail': 'Email is invalid'
        },
        'password': {
            'required': 'This field is required',
            'minlength': 'Password is too short (minimum is 6 characters)',
            'maxlength': 'Password is too long (maximum is 128 characters)',
        }
    };

    get passwordInputType(): string {
        return this.showPassword ? 'text' : 'password';
    }

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private http: HttpService,
        private loginService: LoginService) { }

    ngOnInit(): void {
        this.buildForm();
    }

    onSubmit() {
        if (this.registerForm.status === FormStatus.valid && this.registerForm.dirty) {
            this.registerModel = this.registerForm.value;
            this.loginService.register(<RegisterModel>{
                email: this.registerForm.value.email,
                password: this.registerForm.value.password,
                confirmPassword: this.registerForm.value.password
            }).subscribe((res) => {
                this.http.navigateTo(['/profile/home']);
            }, (err) => {
                this.populateGeneralErrors(err);
            });
        }
        this.validate();
    }

    goToLogin() {
        this.router.navigate(['/login/sign_in']);
    }    

    private buildForm(): void {
        this.registerForm = this.fb.group({
            'email': [this.registerModel.email, [Validators.required]],
            'password': [this.registerModel.password, [Validators.required, Validators.minLength(6), Validators.maxLength(128)]]
        });
        this.registerForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    private onValueChanged(data?: any) {
        if (!this.registerForm) { return; }
        this.generalErrors = null;
        const form = this.registerForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    private validate() {
        if (!this.agreeTermOfUse) { return; }
        if (!this.registerForm) { return; }
        const form = this.registerForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    private populateGeneralErrors(errors) {
        try {
            errors.json();
            this.generalErrors = this.getParseServerErrorsToArray(errors.json());
        } catch (error) {
            this.generalErrors = ['Invalid register attempt.'];
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