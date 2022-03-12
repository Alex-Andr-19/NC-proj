import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DailyStickerComponent} from "./daily-sticker/daily-sticker.component";

@NgModule({
  declarations: [
    AppComponent,
    DailyStickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
