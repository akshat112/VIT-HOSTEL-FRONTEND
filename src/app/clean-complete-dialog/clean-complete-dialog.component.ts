import { Component, OnInit, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-clean-complete-dialog',
  templateUrl: './clean-complete-dialog.component.html',
  styleUrls: ['./clean-complete-dialog.component.css']
})
export class CleanCompleteDialogComponent implements OnInit {

  constructor() { }

  data = {
    token: '',
    worker: ''
  }

  ngOnInit() {
  }

}
