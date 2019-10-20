import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CompleteCleanRequestService {

  constructor(private _http: HttpClient) { }
  url = environment.SERVER + "/students/clean/request/complete/";
  completeClean(data){
    return this._http.post<any>(this.url, data);
  }
}
