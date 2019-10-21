import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupervisorLoginService {

  constructor(private _http: HttpClient) { }

  url = environment.SERVER + '/guard';

  supervisorLogin(data){
    return this._http.post<any>(this.url, data)
  }
  isLoggedIn(){
    return !!localStorage.getItem('supervisor-token');
  }
  getToken(){
    return localStorage.getItem('supervisor-token');
  }

}
