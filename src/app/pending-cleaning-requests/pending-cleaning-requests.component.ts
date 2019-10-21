import { Component, OnInit } from '@angular/core';
import { SupervisorActionsService } from '../services/supervisor-actions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CleanCompleteDialogComponent } from '../clean-complete-dialog/clean-complete-dialog.component';

@Component({
  selector: 'app-pending-cleaning-requests',
  templateUrl: './pending-cleaning-requests.component.html',
  styleUrls: ['./pending-cleaning-requests.component.css']
})
export class PendingCleaningRequestsComponent implements OnInit {

  constructor(private _supervisor: SupervisorActionsService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  allPending: any;
  completedByStudent: any;
  showSpinner1 = true;
  showSpinner2 = true;

  hasData1 = false;
  hasData2 = false;

  cleanCompleteData = {
    token: '',
    worker: '',
  }

  ngOnInit() {
    // All pending
    this._supervisor.allPending().subscribe(
      data => {
        this.showSpinner1 = false;
        if (data.msg == 'OK') {
          this.hasData1 = true;
          this.allPending = data.data;
          // console.log(data.data);
        } else {
          this._snackBar.open('Cannot fetch pending requests', 'Ok', {
          duration: 3000
      });
        }
      },
      error => this._snackBar.open('Some error in fetching pending requests', 'Ok', {
          duration: 3000
      })
    );

    // Completed by student
    this._supervisor.confirmedByStudent().subscribe(
      data => {
        this.showSpinner2 = false;
        if (data.msg == 'OK') {
          this.hasData2 = true;
          this.completedByStudent = data.data;
          console.log(data.data);
        } else {
          this._snackBar.open('Cannot fetch completed requests', 'Ok', {
          duration: 3000
      });
        }
      },
      error => this._snackBar.open('Some error in fetching completed requests', 'Ok', {
          duration: 3000
      })
    );
  }

  openModal() {
    const dialogRef = this.dialog.open(CleanCompleteDialogComponent, {
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
    console.log("Dialog was closed");
    console.log(result);
    this.cleanCompleteData.token = result.token;
    this.cleanCompleteData.worker = result.worker;

    if(!!result.token && !!result.worker){
      // console.log("Succcess")
      this._supervisor.confirmedBySupervisor(this.cleanCompleteData).subscribe(
        data => {
          console.log("Sup: ")
          console.log(data)
          if(data.msg == 'OK'){
            this.ngOnInit()
          } else{
            this._snackBar.open('Cannot complete request', 'Ok', {
              duration: 3000
            });
          }
        },
        error => {
          this._snackBar.open('Some error occured!', 'Ok', {
              duration: 3000
            });
        }
      )
    } else{
      console.log("Fail")
    }
    });
    }

}
