import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../services/complaints.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  constructor(private _complaint: ComplaintsService) { }

  complaintData = {
    type: '',
    content: ''
  };


  postedFlag = false;
  successStatus = false;
  ngOnInit() {
  }

  back() {
    this.postedFlag = false;
    this.complaintData = {
    type: '',
    content: ''
  };
  }
  complaint() {
    this._complaint.postComplaint(this.complaintData)
    .subscribe(
      data => {
        this.postedFlag = true;
        if (data.msg == 'OK') {
          this.successStatus = true;
          console.log(data);
        } else {
          this.successStatus = false;
          console.log(data);        }
      },
      error => {
        this.postedFlag = true;
        this.successStatus = false;
        console.log(error);
      }
    );
  }


}
