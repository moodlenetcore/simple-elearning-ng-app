import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BaseAuthComponent } from "./components/base-auth/base-auth.component";

import { HttpService } from "./services/http.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        BaseAuthComponent
    ],
    providers: [
        HttpService
    ]
})

export class AppCommonModule { }