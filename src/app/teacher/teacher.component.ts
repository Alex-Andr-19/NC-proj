import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// @ts-ignore
import {Teacher} from "../interfaces/TeacherI"

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css', './opened-teacher.css']
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

  @Output() opened: EventEmitter<[boolean, number]> = new EventEmitter<[boolean, number]>();

  localOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  formatPhoneNumber(): string {
    return `${this.data.contacts.substring(0, 2)} (${this.data.contacts.substring(2, 5)}) ${this.data.contacts.substring(5, 8)}-${this.data.contacts.substring(8, 10)}-${this.data.contacts.substring(10, 12)}`;
  }

  toggleTeacher(): void {
    this.localOpened = !this.localOpened;
    this.opened.emit([this.localOpened, this.data.id]);

    document.getElementById(`t${this.data.id}`)?.classList.toggle("opened");
    document.getElementById(`t${this.data.id}`)?.classList.toggle("closed");
  }

  createWorkList(): Array<string> {
    return this.data.works.split(', ');
  }

  createContactList(): Array<string> {
    return this.data.contacts.split(", ")
  }

}
