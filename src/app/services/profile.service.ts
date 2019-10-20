import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) { }
    url = environment.SERVER + "/students/profile";

    getProfile(){
      return this._http.get(this.url);
    }

}
