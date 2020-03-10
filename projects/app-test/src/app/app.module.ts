import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgPreloaderModule} from '../../../ng-preloader/src/lib/ng-preloader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPreloaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
