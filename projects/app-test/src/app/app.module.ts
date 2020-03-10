import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgPreloaderModule} from '../../../ng-preloader/src/ng-preloader.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgPreloaderModule.withParams({errorFunc: (msg) => {alert(msg)}})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
