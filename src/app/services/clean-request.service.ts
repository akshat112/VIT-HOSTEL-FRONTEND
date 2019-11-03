import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CleanRequestService {
  url = "";
  constructor(private _http: HttpClient) { }
  makeCleanRequest(){
    this.url = environment.SERVER + "/students/clean/request?token=" + localStorage.getItem('token');
    return this._http.get<any>(this.url);
  }
}
