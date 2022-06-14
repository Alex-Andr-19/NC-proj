import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
// @ts-ignore
import {LessonI} from "../../interfaces/Lesson.ts"

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  stickerCount: number[] = [1, 2, 3, 4, 5, 6];

  startDay: number = 0;
  startDate: Date = new Date();
  today: Date = new Date(1647694637000);
  currentDay: number = this.today.getDay();

  isScrollable: boolean = true;

  lessons: [LessonI[]] = [[]];

  constructor(private service: ApiService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  // load data from api (my own server)
  private getData() {
    this.service.getData("lessonsUrl").subscribe(
      (res: object) => {
        // @ts-ignore
        this.lessons = res.res;
      },
      (er: object) => {
        console.log("ERR:", er);
      },
      () => {
        this.lessons?.forEach((d) => {
          d.forEach((l) => {
            l.formatDate = new Date(l.date);
          })
        })
      }
    )
  }

  toggleScrollable(value: boolean): void {
    document.getElementById("mi")?.scroll({top: 0});

    this.isScrollable = !value;
    this.renderMainInfo();
  }

  // create class value for main-block
  renderMainInfo(): string {
    let res: string = "calendar";
    if (this.isScrollable) {
      res += " scrollable";
    } else {
      res += " hidden";
    }

    return res
  }

}
