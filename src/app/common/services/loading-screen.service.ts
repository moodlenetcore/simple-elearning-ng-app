import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingScreenService {
    loadingScreenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    show() {
        this.loadingScreenSubject.next(true);
    }

    hide() {
        this.loadingScreenSubject.next(false);
    }
}
