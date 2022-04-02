import { Component } from '@angular/core';
import {ApiService} from "./api.service";
import {environment} from "../environments/environment";

interface Lesson {
  id: number,
  classRoom: string,
  date: number,
  formatDate: Date,
  format: string,
  teacher: string,
  name: string,
  theme: string,
  homework: string,
  lessonNum: number,
  localGroup: number[],
}

interface ApiDataI {
    students: Object[],
    teachers: Object[],
    lessons: [Lesson[]],
    groups: Object[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDU Cite';
  stickerCount: number[] = [1, 2, 3, 4, 5, 6];

  startDay: number = 0;
  startDate: Date = new Date();
  today: Date = new Date(1647694637000);
  currentDay: number = this.today.getDay();

  isScrollable: boolean = true;

  private _apiUrls: string[] = environment.lib.api;
  _data: ApiDataI = {
    students: [],
    teachers: [],
    lessons: [[]],
    groups: []
  };

  constructor(private service: ApiService) {
    this.getData()
  }

  private getData() {
    for (let api of this._apiUrls) {
      this.service.getData(api).subscribe(
        (res: object) => {
          // @ts-ignore
          this._data[api.substring(0, api.length - 3)] = res.res;
        },
        (er: object) => {
          console.log("ERR:", er);
        },
        () => {
          this._data.lessons?.forEach((d) => {
            d.forEach((l) => {
              l.formatDate = new Date(l.date);
            })
          })

          // console.log("FROM app.component:");
          // console.log(this.currentDay);
          // console.log("=====\n");
        }
      )
    }
  }

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
    document.getElementById("mi")?.scroll({top: 0});

    this.isScrollable = !value;
    this.renderMainInfo();
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

  // createLocalLessonsArray(dayNum: number): Lesson[] {
  //   let res: Lesson[] = [];
  //
  //   for (let d of this._data.lessons) {
  //     if (d[0].formatDate.getDay() === dayNum) {
  //       res.push(d);
  //     }
  //   }
  //
  //   return res;
  // }

}
