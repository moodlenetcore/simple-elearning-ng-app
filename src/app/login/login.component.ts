import { Component, OnInit } from '@angular/core';
import { HttpService } from "../common/services/http.service";
import { LoadingScreenService } from "app/common/services/loading-screen.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpService,
    private loadingScreenService: LoadingScreenService) { }

  ngOnInit() {
    if (this.http.isAppAuthenticated()) {
      this.http.navigateTo(['/profile']);
    }
    this.loadingScreenService.hide();
  }
}
