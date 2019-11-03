import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupervisorActionsService {

  constructor(private _http: HttpClient) { }
  allPendingURL = "";
  confirmedByStudentURL = "";
  confirmedBySupervisorURL = "";
  listOfComplaintsURL = "";
  complaintResolveURL = "";

  public allPending(): any{
    this.allPendingURL = environment.SERVER + '/guard/pending/request?token='+localStorage.getItem('supervisor-token');
    return this._http.get<any>(this.allPendingURL)
  }
  confirmedByStudent(): any{
    this.confirmedByStudentURL = environment.SERVER + '/guard/request/confirmation/list?token='+localStorage.getItem('supervisor-token');
    return this._http.get<any>(this.confirmedByStudentURL);
  }
  confirmedBySupervisor(data): any{
    this.confirmedBySupervisorURL = environment.SERVER + '/guard/clean/request/confirmed?token='+localStorage.getItem('supervisor-token');
    return this._http.post<any>(this.confirmedBySupervisorURL, data)
  }
  public listOfComplaints(){
    this.listOfComplaintsURL = environment.SERVER + '/guard/complain/list?token='+localStorage.getItem('supervisor-token');
    return this._http.get<any>(this.listOfComplaintsURL)
  }
  public complaintResolve(data){
    this.complaintResolveURL = environment.SERVER + '/guard/complains/complete?token='+localStorage.getItem('supervisor-token')+'&uid=';
    let url = this.complaintResolveURL + data;
    return this._http.get<any>(url)
  }

}
