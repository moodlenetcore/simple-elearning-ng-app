import { Injectable } from "@angular/core";
import { HttpService } from "../../common/services/http.service";
import { Observable } from "rxjs/Rx";

import { LoginModel } from "./login.interface";

@Injectable()
export class LoginService {

    constructor(private http: HttpService) { }

    login(model: LoginModel) {
        return this.http.post("/api/Account/Login", model)
                .map((res) => {
                    let result = res.json();
                    sessionStorage.setItem("token", result.accessToken);

                    return result;
                })
    }
}