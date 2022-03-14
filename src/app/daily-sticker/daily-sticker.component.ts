import {Component, EventEmitter, Input, Output} from '@angular/core';

interface Lesson {
  time: string,
  format: string,
  teacher: string,
  title: string,
  theme: string,
  homeWork: string
}

@Component({
  selector: 'daily-sticker',
  templateUrl: './daily-sticker.component.html',
  styleUrls: ['./daily-sticker.component.css']
})
export class DailyStickerComponent {
  @Input()
  isCurrent: boolean = false;

  @Input()
  weekDay: number = 0;

  @Output()
  opened: EventEmitter<boolean> = new EventEmitter<boolean>();
  localOpened: boolean = false;

  toggleText: string[] = ["См. всё", "Скрыть"]

  dayString: string[] = ["Понедельник", "Вторик", "Среда", "Четверг", "Пятница", "Суббота"];

  lessons: Array<Lesson> = [
    {
      time: "16:30",
      format: "Урок",
      teacher: "Шутова Е. В.",
      title: "Инженерная графика",
      theme: "Почему проффесию выбирают в раннем возрасте ?",
      homeWork: "Не следует, однако забывать, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Не следует, однако забывать, что новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития."
    },
    {
      time: "16:30",
      format: "Урок",
      teacher: "Шутова Е. В.",
      title: "Инженерная графика",
      theme: "Почему проффесию выбирают в раннем возрасте ?",
      homeWork: "Не следует, однако забывать, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Не следует, однако забывать, что новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития."
    },
    {
      time: "16:30",
      format: "Урок",
      teacher: "Шутова Е. В.",
      title: "Инженерная графика",
      theme: "Почему проффесию выбирают в раннем возрасте ?",
      homeWork: "Не следует, однако забывать, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Не следует, однако забывать, что новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития."
    },
    {
      time: "16:30",
      format: "Урок",
      teacher: "Шутова Е. В.",
      title: "Инженерная графика",
      theme: "Почему проффесию выбирают в раннем возрасте ?",
      homeWork: "Не следует, однако забывать, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Не следует, однако забывать, что новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития."
    }
  ]

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

    if (this.isCurrent) {
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

}
