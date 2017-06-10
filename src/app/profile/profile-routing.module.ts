import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from "./profile.component";
import { ProfileHomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: ProfileHomeComponent },
            { path: '**', redirectTo: 'home' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProfileRoutingModule {

}