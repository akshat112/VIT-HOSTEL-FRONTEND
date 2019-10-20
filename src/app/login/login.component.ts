import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {environment} from '../../environments/environment'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _login: LoginService) { }

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
  // console.log(this.formData)
  this._login.login(this.formData).subscribe(
    data => console.log("Success", data),
    error =>  console.log("Error", error)
  )
}

  }
