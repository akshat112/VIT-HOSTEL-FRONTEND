import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  constructor(private _http: HttpClient) { }
  url = '';
  postComplaint(data){
    this.url = environment.SERVER + '/students/report/complain?token=' + localStorage.getItem('token');
    return this._http.post<any>(this.url, data);
  }
}
