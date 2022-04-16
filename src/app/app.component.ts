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



  page: number = 0;
  toolIcons: string[] = [];

  private _apiUrls: string[] = environment.lib.api;
  _data: ApiDataI = {
    students: [],
    teachers: [],
    lessons: [[]],
    groups: []
  };

  constructor(private service: ApiService) {
    // this.getData()

    this.setPage(0);
  }

  // load data from api (my own server)
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
        }
      )
    }
  }

  // change page on main-block
  setPage(value: number): void {
    this.page = value;
    this.toolIcons = [
      "../assets/calendar",
      "../assets/book",
      "../assets/head-side",
      "../assets/brain",
    ];

    for (let i: number = 0; i < this.toolIcons.length; i++) {
      if (i === this.page) this.toolIcons[i] += "-active";
      this.toolIcons[i] += ".svg";
    }
  }

}
