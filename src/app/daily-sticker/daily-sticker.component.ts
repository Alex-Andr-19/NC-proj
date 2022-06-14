import {Component, EventEmitter, Input, Output} from '@angular/core';
// @ts-ignore
import {Lesson} from "../interfaces/Lesson.ts"


@Component({
  selector: 'daily-sticker',
  templateUrl: './daily-sticker.component.html',
  styleUrls: ['./daily-sticker.component.css']
})
export class DailyStickerComponent {
  @Input() isToday: boolean = false;
  @Input() stickerNum: number = 0;
  @Input() data: Lesson[] = [
    {
      id: 0,
      classRoom: "",
      date: 0,
      formatDate: new Date(),
      format: "",
      teacher: "",
      name: "",
      theme: "",
      homework: "",
      lessonNum: 0,
      localGroup: [],
    }
  ];

  @Output() opened: EventEmitter<boolean> = new EventEmitter<boolean>();

  localOpened: boolean = false;

  toggleText: string[] = ["См. всё", "Скрыть"]

  dateNum: number = 0;
  monthNum: number = 0;
  dayNum: number = 0;

  today: Date = new Date();

  dayString: string[] = ["Понедельник", "Вторик", "Среда", "Четверг", "Пятница", "Суббота"];
  shortMonthsString: string[] = ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Нояб", "Дек"];


  constructor () {}

  renderWrap(): string {
    let res: string = "wrap";
    if (this.localOpened) {
      res += " opened";
    }

    return res;
  }

  renderBody(): string {
    let res: string = "body";

    if (this.isToday) {
      res += " active";
    }

    return res;
  }

  toggleSticker(): void {
    this.localOpened = !this.localOpened;

    this.renderBody()

    this.opened.emit(this.localOpened);
  }

  _toInt(value: string | boolean): number {
    return Number(value);
  }

  ngDoCheck() {
    this.dayNum = 0;
    this.dateNum = 0;
    this.monthNum = 0;

    if (this.data) {
      this.dayNum = this.data[0].formatDate.getDay();
      this.dateNum = this.data[0].formatDate.getDate();
      this.monthNum = this.data[0].formatDate.getMonth();
    }
  }
}
