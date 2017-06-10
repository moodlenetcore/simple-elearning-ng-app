import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from "./profile-routing.module";

import { ProfileComponent } from "./profile.component";
import { ProfileHomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent,
        ProfileHomeComponent
    ]
})

export class ProfileModule { }