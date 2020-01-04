import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingBlockService {

  constructor() { }

  private isShown: Subject<boolean> = new BehaviorSubject(false);

  $isShown = this.isShown.asObservable();

  show() {
    this.isShown.next(true);
  }

  hide() {
    this.isShown.next(false);
  }

}
