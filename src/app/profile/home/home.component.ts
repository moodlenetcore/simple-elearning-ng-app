import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../common/services/http.service";

@Component({
    selector: 'profile-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class ProfileHomeComponent implements OnInit {

    constructor(private http: HttpService) { }

    ngOnInit() {
    }

    logout() {
        this.http.logout();
    }
}