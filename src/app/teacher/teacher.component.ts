import {Component, Input, OnInit} from '@angular/core';

interface Teacher {
  id: number,
  contacts: string,
  department: string,
  fullName: string,
  groups: string,
  info: string,
  login: string,
  password: string,
  photo: string,
  shortName: string,
  special: string,
  works: string,
}

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input() data: Teacher = {
    id: 0,
    contacts: "",
    department: "",
    fullName: "",
    groups: "",
    info: "",
    login: "",
    password: "",
    photo: "",
    shortName: "",
    special: "",
    works: "",
  };

  constructor() { }

  ngOnInit(): void {
  }

  renderPhotoClass(): string {
    let res: string = "photo ";
    if (this.data.photo === "teacher2.jpg") {
      res += "p2";
    } else {
      res += "p1";
    }

    return res;
  }

}
