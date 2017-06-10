import { Component, OnInit } from '@angular/core';
import { BaseAuthComponent } from "../common/components/base-auth/base-auth.component";
import { HttpService } from "../common/services/http.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends BaseAuthComponent implements OnInit {

  constructor(http: HttpService) {
    super(http);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
