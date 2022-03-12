import {Component, Input, OnInit} from '@angular/core';

interface Lesson {
  time: String,
  format: String,
  teacher: String,
  title: String,
  theme: String
}

@Component({
  selector: 'daily-sticker',
  templateUrl: './daily-sticker.component.html',
  styleUrls: ['./daily-sticker.component.css']
})
export class DailyStickerComponent {
  @Input()
  isActive: boolean = false;

  @Input()
  weekDay: number = 0;

  dayString: String[] = ["Понедельник", "Вторик", "Среда", "Четверг", "Пятница", "Суббота"];

  lessons: Array<Lesson> = [
    {
      time: "16:30",
      format: "Урок",
      teacher: "Шутова Е. В.",
      title: "Инженерная графика",
      theme: "Почему проффесию выбирают в раннем возрасте ?"
    },
    {
      time: "16:30",
      format: "Урок",
      teacher: "Шутова Е. В.",
      title: "Инженерная графика",
      theme: "Почему проффесию выбирают в раннем возрасте ?"
    },
    {
      time: "16:30",
      format: "Урок",
      teacher: "Шутова Е. В.",
      title: "Инженерная графика",
      theme: "Почему проффесию выбирают в раннем возрасте ?"
    },
    {
      time: "16:30",
      format: "Урок",
      teacher: "Шутова Е. В.",
      title: "Инженерная графика",
      theme: "Почему проффесию выбирают в раннем возрасте ?"
    }
  ]

  constructor () {}

  renderClass(): String {
    let res: String = "body";

    if (this.isActive) {
      res += " active";
    }

    return res;
  }
}
