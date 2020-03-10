import { NgModule } from '@angular/core';
import { NgPreloaderComponent } from './ng-preloader.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgPreloaderInterceptor} from './ng-preloader.interceptor';
import {CommonModule} from '@angular/common';
import {NgPreloaderService} from './ng-preloader.service';

@NgModule({
  declarations: [NgPreloaderComponent],
  imports: [
    CommonModule
  ],
  exports: [NgPreloaderComponent],
  providers: [
    NgPreloaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgPreloaderInterceptor,
      multi: true
    },
  ]
})
export class NgPreloaderModule {
  static withParams(param: {errorFunc?: (message: string) => void}) {
    if(param) {
      NgPreloaderService.errorFunc = param.errorFunc || null;
    }
    return this;
  }

}
