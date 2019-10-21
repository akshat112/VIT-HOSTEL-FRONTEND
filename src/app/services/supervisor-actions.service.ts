import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupervisorActionsService {

  constructor(private _http: HttpClient) { }

  allPendingURL = environment.SERVER + '/guard/pending/request';
  confirmedByStudentURL = environment.SERVER + '/guard/request/confirmation/list';
  confirmedBySupervisorURL = environment.SERVER + '/guard/clean/request/confirmed/';
  listOfComplaintsURL = environment.SERVER + '/guard/complain/list';
  complaintResolveURL = environment.SERVER + '/guard/complains/complete?uid=';

  public allPending(): any{
    return this._http.get<any>(this.allPendingURL)
  }
  confirmedByStudent(): any{
    return this._http.get<any>(this.confirmedByStudentURL);
  }
  confirmedBySupervisor(data): any{
    return this._http.post<any>(this.confirmedBySupervisorURL, data)
  }
  public listOfComplaints(){
    return this._http.get<any>(this.listOfComplaintsURL)
  }
  public complaintResolve(data){
    let url = this.complaintResolveURL + data;
    return this._http.get<any>(url)
  }

}
