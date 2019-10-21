import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { SupervisorLoginService } from './services/supervisor-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


constructor(private loginService: LoginService, private _router: Router, private supervisorLogin: SupervisorLoginService) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn() || this.supervisorLogin.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
  }

