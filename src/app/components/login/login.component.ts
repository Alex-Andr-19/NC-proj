import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
// @ts-ignore
import { UserI } from "../../interfaces/UserI.ts"
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  form: FormGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  ngOnInit(): void {
  }

  tryLog(ev: SubmitEvent): void {
    this.auth.login(this.form.value).subscribe(
      (res: Observable<Object>) => {
        console.log(res);
      },
        (er: any) => {
        console.error(er);
      }
    )
  }

}
