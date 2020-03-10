import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {NgPreloaderService} from './ng-preloader.service';

@Component({
  selector: 'me-ng-preloader',
  template: `<div class="preloader" *ngIf="indicator$ | async"></div>`,
  styles: [],
  styleUrls: ['./ng-preloader.component.less']
})
export class NgPreloaderComponent implements OnInit {

  indicator$: Observable<boolean>;

  constructor(
    private loaderService: NgPreloaderService
  ) { }

  ngOnInit() {
    this.indicator$ = this.loaderService.indicator$;
  }

}
