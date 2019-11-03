import { Component, OnInit } from '@angular/core';
import { CleanRequestService } from '../services/clean-request.service';
import { ProfileService } from '../services/profile.service';
import { CompleteCleanRequestService } from '../services/complete-clean-request.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {

  constructor(private _cleanReq: CleanRequestService,
              private _profile: ProfileService,
              private _complete: CompleteCleanRequestService,
              private _router: Router,
              private _snackBar: MatSnackBar
    ) { }

  msg = '';
  profileData;
  reqAlreadyPresent: boolean = false;
  tipPaid = false;
  completedMsg = '';
  completeData = {
    bribe: true
  };
showSpinner = false;
showSpinner2 = false;

  ngOnInit() {
    this._profile.getProfile().subscribe(
      data => {
        this.profileData = data;
        console.log(data);
        this.reqAlreadyPresent = this.profileData.data.roomId.cleanRequestId != null;
      },
      error => console.log('Error', error)
    );
  }



  requestComplete() {
    this.showSpinner2 = true;
    this._complete.completeClean(this.completeData).subscribe(
      data => {
        this.showSpinner2 = false;
        if (data.msg == 'OK') {
          this._snackBar.open(`Request completed successfully! The OTP is: ${data.data.token}`, 'Ok', {
            duration: 10000
          });
          // this.completedMsg = `Request completed successfully! The OTP is: ${data.data.token}`;
          this.ngOnInit();
        } else {
          this._snackBar.open(`No pending requests present`, 'Ok', {
            duration: 10000
          });
          // this.completedMsg = "No pending requests present"
        }
      },
      error => {
        // this.completedMsg = "Some error occured!"
        this.showSpinner2 = false;
        this._snackBar.open('No request found', 'Ok', {
            duration: 10000
          });
      }
    );
  }

  cleanRequest() {
    this._cleanReq.makeCleanRequest().subscribe(
      data => {
        console.log('Success', data);
        this.showSpinner = true;
        if (data.msg == 'OK') {
          // this.msg = "Request made successfully";
          this.showSpinner = false;
          this._snackBar.open(`Request made successfully`, 'Ok', {
            duration: 10000
          });
          this.ngOnInit();


        } else if (data.msg == 'NOT OK' || data.msg == 'invalid request') {
          // this.msg = "Already a request is pending";
          this.showSpinner = false;
          this._snackBar.open(`Already a request is pending`, 'Ok', {
            duration: 10000
          });
        } else {
          // this.msg = "Error in making a request";
          this.showSpinner = false;
          this._snackBar.open(`Error in making a request`, 'Ok', {
            duration: 10000
          });
        }
      },
      error => {
        this.showSpinner = false;
        console.log('Error', error)
      }
    );
  }
}
