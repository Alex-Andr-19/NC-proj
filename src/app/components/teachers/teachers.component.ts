import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: [] = [];

  constructor(private service: ApiService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  // load data from api (my own server)
  private getData() {
    this.service.getData("teachersUrl").subscribe(
      (res: object) => {
        // @ts-ignore
        this.teachers = res.res;
      },
      (er: object) => {
        console.log("ERR:", er);
      },
      () => {
        console.log(this.teachers);
      }
    )
  }

}
