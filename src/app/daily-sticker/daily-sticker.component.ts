import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'daily-sticker',
  templateUrl: './daily-sticker.component.html',
  styleUrls: ['./daily-sticker.component.css']
})
export class DailyStickerComponent implements OnInit {
  isActive: boolean = false;

  constructor(private _weekDay: Number) {}

  ngOnInit(): void {
  }

  getWeekDay(): Number {
    return this._weekDay;
  }

  activate(): void {
    this.isActive = true;
  }

  deactivate(): void {
    this.isActive = false;
  }

}
