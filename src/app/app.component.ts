import { Component } from '@angular/core';


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

  isScrollable: boolean = true;

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

  toggleScrollable(value: boolean): void {
    console.log(value);
    this.isScrollable = !value;
    this.renderMainInfo()
  }

  renderMainInfo(): string {
    let res: string = "main_info";
    if (this.isScrollable) {
      res += " scrollable";
    } else {
      res += " hidden";
    }

    return res
  }
}
