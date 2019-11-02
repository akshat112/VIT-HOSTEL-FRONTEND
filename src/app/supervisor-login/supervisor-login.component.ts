import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { SupervisorLoginService } from '../services/supervisor-login.service';

@Component({
  selector: 'app-supervisor-login',
  templateUrl: './supervisor-login.component.html',
  styleUrls: ['./supervisor-login.component.css']
})
export class SupervisorLoginComponent implements OnInit {

  constructor(private router: Router, private _login: SupervisorLoginService, private _snackBar: MatSnackBar) { }

  formData = {
    name: '',
    type: '',
    block: ''
  }
  showSpinner:boolean = false;
  showError:boolean = false;

  ngOnInit() {
    if(!!localStorage.getItem('supervisor-token')){
      this.router.navigate(['/supervisor/clean/pending']);
    }
  }

  submit(){
    this.showSpinner = true;
    this._login.supervisorLogin(this.formData)
    .subscribe(
    data => {
      console.log('Success', data);
      this.showSpinner = false;
      if(data.msg == 'OK'){
        localStorage.setItem('supervisor-token',data.data.session)
        setTimeout(()=>{
          this.router.navigate(['/supervisor/clean/pending']);
        },500)
      }
      else{
        this.showSpinner = false;
        this._snackBar.open('Invalid credentials', 'Ok', {
        duration: 3000
      })
        }
  },
    error =>  {
      console.log("Error", error);
      this.showSpinner = false;
      this._snackBar.open('Error', 'Ok', {
        duration: 3000
      });
    }
  );
  }

}
