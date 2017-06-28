import { Component, OnInit } from '@angular/core';
import { BaseAuthComponent } from "../common/components/base-auth/base-auth.component";
import { HttpService } from "../common/services/http.service";
import { LoadingScreenService } from "app/common/services/loading-screen.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends BaseAuthComponent implements OnInit {

  constructor(protected http: HttpService, protected loadingScreenService: LoadingScreenService) {
    super(http, loadingScreenService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadingScreenService.hide();
  }

  scrollToTop() {

  }

  logout() {
    this.http.logout();
  }
}
