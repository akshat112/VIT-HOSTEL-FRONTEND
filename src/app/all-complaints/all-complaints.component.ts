import { Component, OnInit } from '@angular/core';
import { SupervisorActionsService } from '../services/supervisor-actions.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.css']
})
export class AllComplaintsComponent implements OnInit {

  constructor(private _supervisor: SupervisorActionsService, private _snackBar: MatSnackBar) { }
  allPending: any;
  completedByStudent: any;
  hasData = false;
  showSpinner1 = true;
  showSpinner2 = true;
  ngOnInit() {
    this._supervisor.listOfComplaints().subscribe(
      data => {
        this.showSpinner1 = false;
        if(data.msg == 'OK'){
          this.hasData = true;
          this.allPending = data.data;
        } else{
          this.hasData = false;
      //     this._snackBar.open('Cannot fetch complaints', 'Ok', {
      //     duration: 3000
      // });
        }
      },
      error => this._snackBar.open('Error fetching complaints', 'Ok', {
          duration: 3000
      })
    )
  }
  resolved(data){
    console.log(data)
    this._supervisor.complaintResolve(data).subscribe(
      data => {
        if(data.msg == 'OK'){
          this._snackBar.open('Marked resolved', 'Ok', {
          duration: 3000
      })
          this.ngOnInit()
        } else{
          this._snackBar.open('Cannot resolve complaint', 'Ok', {
          duration: 3000
      })
        }
      },
      error => {
        this._snackBar.open('Error resolving complaint', 'Ok', {
          duration: 3000
      })
      }
    )
  }

}
