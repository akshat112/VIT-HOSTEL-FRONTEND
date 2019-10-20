import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {environment} from '../../environments/environment'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _login: LoginService, private _snackBar: MatSnackBar) { }

  showSpinner:boolean = false;
  showError:boolean = false;
  formData = {
    registerNumber: '',
    name: '',
    type: '',
    bed: '',
    block: '',
    num: ''
  };

  ngOnInit() {
  }

onSubmit(){
  this.showSpinner = true;
  this._login.login(this.formData).subscribe(
    data => {
      console.log('Success', data);
      this.showSpinner = false;
      if(data.msg == 'OK'){
        localStorage.setItem('token',data.data.session)
        this.router.navigate(['/cleanRequest']);
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
