import { Injectable } from "@angular/core";
import { RegisterModel } from "./login.interface";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

let baseApi = 'http://localhost:31202/api/login';
@Injectable()
export class LoginService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    register(model: RegisterModel): Promise<any> {
        return this.http.put(`${baseApi}/register`, JSON.stringify(model), this.headers)
            .toPromise()
            .then(res => res.json())
            .catch(err => err);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}