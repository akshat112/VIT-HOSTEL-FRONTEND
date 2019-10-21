import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { SupervisorLoginService } from '../services/supervisor-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _auth: LoginService, public router: Router, public _superAuth: SupervisorLoginService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  superLogout(){
    localStorage.removeItem('supervisor-token');
    this.router.navigate(['/supervisor/login']);
  }

}
