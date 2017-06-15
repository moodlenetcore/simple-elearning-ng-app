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
    
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private http: HttpService,
        private loginService: LoginService) { }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.registerForm = this.fb.group({
            'email': [this.registerModel.email, [Validators.required]],
            'password': [this.registerModel.password, [Validators.required, Validators.minLength(6), Validators.maxLength(128)]],
            'agreeTermOfUse': [this.agreeTermOfUse, [Validators.required]]
        });
        this.registerForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.registerForm) { return; }
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

    onSubmit() {
        if (this.registerForm.status === FormStatus.valid && this.registerForm.dirty) {
            this.registerModel = this.registerForm.value;
            this.loginService.register(<RegisterModel>{
                email: this.registerForm.value.email,
                password: this.registerForm.value.password,
                confirmPassword: this.registerForm.value.password
            }).subscribe((res) => {
                this.http.navigateTo(['/profile/home']);
            });;
        }
        this.validate();
    }

    validate() {
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

    goToLogin(){
        this.router.navigate(['/login/sign_in']);
    }
    
    formErrors = {
        'email': '',
        'password': '',
        'agreeTermOfUse': ''
    };

    validationMessages = {
        'email': {
            'required': 'This field is required',
            'invalidEmail': 'Email is invalid'
        },
        'password': {
            'required': 'This field is required',
            'minlength': 'Password is too short (minimum is 6 characters)',
            'maxlength': 'Password is too long (maximum is 128 characters)',
        },
        'agreeTermOfUse': {
            'required': 'This field is required'
        }
    };
}