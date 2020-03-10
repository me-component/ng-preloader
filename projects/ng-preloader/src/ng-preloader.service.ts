import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgPreloaderService {

  counterSubject$: BehaviorSubject<number> = new BehaviorSubject(0);
  readonly indicator$: Observable<boolean>;

  static errorFunc: (message: string) => void = null;

  constructor(){
    this.indicator$ = this.counterSubject$.asObservable().pipe(
      map(value => value > 0)
    )
  }

  add() {
    this.counterSubject$.next(this.counterSubject$.value + 1);
  }

  remove() {
    let newValue = this.counterSubject$.value - 1;
    newValue = Math.max(newValue, 0);
    this.counterSubject$.next(newValue);
  }

}
