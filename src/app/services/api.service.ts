import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
// @ts-ignore
import {Observable} from "rxjs/dist/types";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getData(apiRequest: string): Observable<Object> {
    // @ts-ignore
    const url: string = environment[apiRequest];
    return this.http.get(url);
  }
}
