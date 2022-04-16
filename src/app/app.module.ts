import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DailyStickerComponent} from "./daily-sticker/daily-sticker.component";
import { LessonComponent } from './lesson/lesson.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { CalendarComponent } from './calendar/calendar.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teacher/teacher.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "calendar", pathMatch: "full" },
  { path: "calendar", component: CalendarComponent},
  { path: "teachers", component: TeachersComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DailyStickerComponent,
    LessonComponent,
    CalendarComponent,
    TeachersComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
