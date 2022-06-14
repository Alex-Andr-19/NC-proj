import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import {Lesson} from "../interfaces/Lesson.ts"


@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  @Input() opened: String = "";
  @Input() data: Lesson = {
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
  };

  canEdit: boolean = true;

  hours: number = 0;
  minutes: number = 0;

  lessonsTime: string[] = ["9:00", "10:45", "13:00", "14:45", "16:30", "18:15", "20:00"]

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.hours = this.data.formatDate.getHours();
    this.minutes = this.data.formatDate.getMinutes();
  }

  renderContent(): string {
    let res: string = "content";

    if (this.opened == "opened") {
      res += ' opened';
    }

    return res;
  }

}
