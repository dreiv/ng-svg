import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InlineSVGModule } from './inline-svg/inline-svg.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, InlineSVGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
