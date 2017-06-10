import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service'

@Component({
    selector: 'base-auth',
    template: ''
})

export class BaseAuthComponent implements OnInit {
    constructor(private http: HttpService) {
    }

    ngOnInit() {
        if (!this.http.isAppAuthenticated())
            this.http.navigateTo(['/login']);
    }
}