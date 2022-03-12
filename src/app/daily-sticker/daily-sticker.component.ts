import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'daily-sticker',
  templateUrl: './daily-sticker.component.html',
  styleUrls: ['./daily-sticker.component.css']
})
export class DailyStickerComponent implements OnInit {
  @Input()
  isActive: boolean = false;

  @Input()
  weekDay: number = 0;

  // constructor(private _weekDay: Number) {
  constructor () {
    console.log(this.isActive);
  }

  ngOnInit(): void {
  }

  // getWeekDay(): Number {
  //   return this._weekDay;
  // }

  activate(): void {
    this.isActive = true;
  }

  deactivate(): void {
    this.isActive = false;
  }

  renderClass(): String {
    let res: String = "body";

    if (this.isActive) {
      res += " active";
    }

    return res;
  }
}
