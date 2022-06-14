import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
// @ts-ignore
import {UserI} from "../interfaces/UserI.ts"
// @ts-ignore
import {Observable} from "rxjs/dist/types";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(user: UserI): Observable<Object> {
    return this.http.get(environment.authUrl+`?login=${user.login}&password=${user.password}`)
  }
}
