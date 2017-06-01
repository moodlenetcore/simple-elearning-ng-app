import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginModel, FormStatus } from "./../core/login.interface";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    showPassword: boolean;
    agreeTermOfUse: boolean;
    loginModel = <LoginModel>{};

    constructor(private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.registerForm = this.fb.group({
            'email': [this.loginModel.email, [Validators.required]],
            'username': [this.loginModel.username, [Validators.required, Validators.maxLength(100)]],
            'password': [this.loginModel.password, [Validators.required, Validators.minLength(6), Validators.maxLength(128)]],
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
            this.loginModel = this.registerForm.value;
            this.router.navigate(['/home']);
            return;
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
        'username': '',
        'password': '',
        'agreeTermOfUse': ''
    };

    validationMessages = {
        'email': {
            'required': 'This field is required',
            'invalidEmail': 'Email is invalid'
        },
        'username': {
            'required': 'This field is required',
            'maxlength': 'Username is too long (maximum is 100 characters)',
            'invalidName': 'Username cannot start with a number, and should only have letters & numbers without spaces.',
            'alreadyExist': 'Username has already been taken'
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