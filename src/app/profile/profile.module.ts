import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { AppCommonModule } from "../common/common.module";
import { ProfileRoutingModule } from "./profile-routing.module";

import { ProfileComponent } from "./profile.component";
import { ProfileHomeComponent } from "./home/home.component";
import { ProfileEditComponent } from './edit/edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent,
        ProfileHomeComponent,
        ProfileEditComponent
    ]
})

export class ProfileModule { }