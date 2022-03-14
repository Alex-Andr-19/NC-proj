import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  @Input()
  time: String = "00:00";
  @Input()
  format: String = "";
  @Input()
  teacher: String = "";
  @Input()
  title: String = "";
  @Input()
  theme: String = "";
  @Input()
  homeWork: String = "";
  @Input()
  opened: String = "";

  canEdit: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
