import { Component } from '@angular/core';
import {ApiService} from "./services/api.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDU Cite';

  page: number = 0;
  toolIcons: string[] = [];

  constructor(private service: ApiService, private router: Router) {
    // this.setPage(0);
    setTimeout(() => {
      if (this.router.url === "/calendar") this.setPage(0);
      if (this.router.url === "/teachers") this.setPage(2);
    }, 0)
  }

  // change page-image on main-block
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
