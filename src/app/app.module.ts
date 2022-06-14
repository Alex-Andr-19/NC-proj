import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DailyStickerComponent} from "./components/daily-sticker/daily-sticker.component";
import { LessonComponent } from './components/lesson/lesson.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { CalendarComponent } from './components/calendar/calendar.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import {AuthGuard} from "./guards/auth.guard";
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "calendar",
    pathMatch: "full"
  },
  {
    path: "calendar",
    component: CalendarComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: {
      expectedRoles: ["Admin", "Teacher", "Student", "Moder"]
    }
  },
  {
    path: "teachers",
    component: TeachersComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: {
      expectedRoles: ["Admin", "Teacher", "Student", "Moder"]
    }
  },
  {
    path: "login",
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DailyStickerComponent,
    LessonComponent,
    CalendarComponent,
    TeachersComponent,
    TeacherComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
