import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) { }

  url = "";

  getProfile(){
      this.url = environment.SERVER + "/students/profile?token=" + localStorage.getItem('token');
      return this._http.get(this.url);
    }

}
