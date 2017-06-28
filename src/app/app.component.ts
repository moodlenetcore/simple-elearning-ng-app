import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoadingScreenService } from "app/common/services/loading-screen.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoadingScreen: boolean = true;

  private loadingScreenSubcription: Subscription;

  constructor(private loadingScreenService: LoadingScreenService) {
  }

  ngOnInit() {
    this.loadingScreenSubcription = this.loadingScreenService.loadingScreenSubject.subscribe(value => {
      this.showLoadingScreen = value;
    });
  }
}
