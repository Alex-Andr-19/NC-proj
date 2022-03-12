import { Component } from '@angular/core';
import {DailyStickerComponent} from "./daily-sticker/daily-sticker.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDU Cite';
  values: Number[] = [1, 2, 3, 4, 5, 6];
  currentDay: number = 4;

  dailyStickers: DailyStickerComponent[] = [];
  constructor() {
    // for (let i = 1; i <= 6; i++) {
    //   this.dailyStickers.push(new DailyStickerComponent(i));
    // }
    //
    // this.dailyStickers[this.currentDay].activate();

    // console.log(this.dailyStickers)
  }
}
