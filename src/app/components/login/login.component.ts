import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
// @ts-ignore
import { UserI } from "../../interfaces/UserI.ts"

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
      () => console.log("Success!!!"),
        (er: any) => {
        console.error(er);
      }
    )
  }

}
