import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BaseAuthComponent } from "./components/base-auth/base-auth.component";

import { HttpService } from "./services/http.service";
import { LoadingScreenService } from "app/common/services/loading-screen.service";

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
        HttpService,
        LoadingScreenService
    ]
})

export class AppCommonModule { }