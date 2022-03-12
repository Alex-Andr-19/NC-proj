import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'daily-sticker',
  templateUrl: './daily-sticker.component.html',
  styleUrls: ['./daily-sticker.component.css']
})
export class DailyStickerComponent implements OnInit {
  @Input()
  isActive: boolean = false;

  constructor(private _weekDay: Number) {
    console.log(this.isActive);
  }

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
