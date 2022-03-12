import { Component } from '@angular/core';
import {DailyStickerComponent} from "./daily-sticker/daily-sticker.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDU Cite';
  stickerCount: number[] = [1, 2, 3, 4, 5, 6];

  startDay: number = 3;
  currentDay: number = 4;

  constructor() {}

  cycleNum(min: number, value: number, max: number): number {

    let res: number = value;
    let size: number = max - min + 1;

    while (res > max) {
      res -= size;
    }
    while (res < min) {
      res += size;
    }

    return res;
  }
}
