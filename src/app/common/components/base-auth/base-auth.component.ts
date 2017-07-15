import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service'
import { LoadingScreenService } from "app/common/services/loading-screen.service";

@Component({
    selector: 'base-auth',
    template: ''
})

export class BaseAuthComponent implements OnInit {
    constructor(
        protected http: HttpService,
        protected loadingScreenService: LoadingScreenService) {
    }

    ngOnInit() {
        if (!this.http.isAppAuthenticated())
            this.http.navigateTo(['/login']);
    }
}