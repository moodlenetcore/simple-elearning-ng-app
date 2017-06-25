import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Headers, Http, Response, Request, RequestOptions, RequestMethod, RequestOptionsArgs } from "@angular/http";
import { Observable } from 'rxjs'

@Injectable()
export class HttpService {
    private tokeyKey = "token";
    private token: string;
    private baseUrl = 'http://localhost:31202'

    constructor(private router: Router, private http: Http) {
    }

    post(url: string, body: any): Observable<Response> {
        return this.http
            .post(this.baseUrl + url, body, <RequestOptionsArgs>{ headers: this.initHeaders() })
            .catch(this.handleError);
    }

    get(url: string): Observable<Response> {
        return this.http
            .get(this.baseUrl + url, <RequestOptionsArgs>{ headers: this.initHeaders() })
            .catch(this.handleError);
    }

    authPost(url: string, body: any): Observable<Response> {
        return this.http
            .post(this.baseUrl + url, body, <RequestOptionsArgs>{ headers: this.initAuthHeaders() })
            .catch(this.handleError);
    }

    authGet(url): Observable<Response> {
        return this.http
            .get(this.baseUrl + url, <RequestOptionsArgs>{ headers: this.initAuthHeaders() })
            .catch(this.handleError);
    }

    navigateTo(commands: any[]) {
        this.router.navigate(commands);
    }

    isAppAuthenticated(): boolean {
        let token = sessionStorage.getItem(this.tokeyKey);
        return token != null;
    }

    logout() {
        this.post("/api/Account/Logout", {})
                .subscribe((res) => {
                    sessionStorage.removeItem("token");
                    this.navigateTo(["/login"])
                })
    }

    private getLocalToken(): string {
        if (!this.token) {
            this.token = sessionStorage.getItem(this.tokeyKey);
        }
        return this.token;
    }

    private initHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');

        return headers;
    }

    private initAuthHeaders(): Headers {
        let token = this.getLocalToken();
        if (token == null) throw "No token";

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append("Authorization", "Bearer " + token);

        return headers;
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error);
    }
}
